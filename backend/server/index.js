import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import arcjet, { detectBot, fixedWindow, shield } from "@arcjet/node";
import { isSpoofedBot } from "@arcjet/inspect";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

// ─────────────────────────────────────────────
// Arcjet — initialized once, outside handlers
// ─────────────────────────────────────────────
const aj = arcjet({
  key: process.env.ARCJET_KEY, // Add ARCJET_KEY to your .env
  rules: [
    // 1. Shield WAF — blocks SQLi, XSS, and OWASP Top 10 attacks
    shield({
      mode: "LIVE",
    }),

    // 2. Bot detection — block all automated clients
    //    Allow curl so you can test locally with: curl -X POST ...
    detectBot({
      mode: "LIVE",
      allow: [
        "CURL",                   // local dev testing
        "CATEGORY:MONITOR",       // uptime monitors (UptimeRobot etc.)
        "CATEGORY:SEARCH_ENGINE", // Googlebot, Bingbot, etc.
      ],
    }),

    // 3. Rate limiting — fixed window: 5 contact requests per 10 minutes per IP
    //    Tight because this is a contact/email endpoint — abuse is costly
    fixedWindow({
      mode: "LIVE",
      window: "10m",
      max: 5,
    }),
  ],
});

// ─────────────────────────────────────────────
// Standard middleware
// ─────────────────────────────────────────────
app.use(
  cors({
    origin: [
      "https://www.sunilkunwar.com.np",
      "https://sunilkunwar.com.np",
      "https://portfolioweb-dmxj.onrender.com",
      "http://localhost:3001",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// ─────────────────────────────────────────────
// Arcjet middleware helper
// Wraps aj.protect() and returns structured error responses
// ─────────────────────────────────────────────
async function arcjetProtect(req, res) {
  const decision = await aj.protect(req);

  // Log the decision in non-production for debugging
  if (process.env.NODE_ENV !== "production") {
    console.log("[Arcjet]", {
      conclusion: decision.conclusion,
      reason: decision.reason,
      ip: decision.ip?.address,
    });
  }

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      res.status(429).json({
        success: false,
        message: "Too many requests. Please wait a few minutes and try again.",
      });
      return false;
    }

    if (decision.reason.isBot()) {
      res.status(403).json({
        success: false,
        message: "Automated requests are not allowed.",
      });
      return false;
    }

    if (decision.reason.isShield()) {
      res.status(403).json({
        success: false,
        message: "Request blocked.",
      });
      return false;
    }

    // Generic deny fallback
    res.status(403).json({
      success: false,
      message: "Request denied.",
    });
    return false;
  }

  // Extra check: block spoofed bots even if decision is ALLOW
  // (e.g. something claiming to be Googlebot but with the wrong IP)
  if (decision.results.some(isSpoofedBot)) {
    res.status(403).json({
      success: false,
      message: "Spoofed bot detected.",
    });
    return false;
  }

  return true;
}

// ─────────────────────────────────────────────
// Routes
// ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.status(200).json({ message: "Portfolio API is live." });
});

app.post("/contact", async (req, res) => {
  // Run Arcjet checks first — bail out early if blocked
  const allowed = await arcjetProtect(req, res);
  if (!allowed) return;

  const { name, email, message } = req.body;

  // Basic input validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, email, message) are required.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // use your own address as sender to avoid spoofing
      replyTo: email,                                 // replies go back to the visitor
      to: "kunwarsunil093@gmail.com",
      subject: `Portfolio contact from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e5e5e5;border-radius:8px;">
          <h2 style="margin:0 0 16px;font-size:1.2rem;color:#0f0f0f;">New contact message</h2>
          <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
            <tr>
              <td style="padding:8px 12px;background:#f9f9f9;font-weight:600;width:90px;">Name</td>
              <td style="padding:8px 12px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#f9f9f9;font-weight:600;">Email</td>
              <td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#f9f9f9;font-weight:600;vertical-align:top;">Message</td>
              <td style="padding:8px 12px;white-space:pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully ✨" });
  } catch (error) {
    console.error("[Contact Error]", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

// ─────────────────────────────────────────────
// Start
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});