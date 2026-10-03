import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import "dotenv/config";

const app = express();
app.set("trust proxy", 1);

const PORT = process.env.PORT || 3001;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const contactRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  handler: (_req, res) => {
    return res.status(429).json({
      success: false,
      message: "Too many requests. Please wait a few minutes and try again.",
    });
  },
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
// Routes
// ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.status(200).json({ message: "Portfolio API is live." });
});

app.post("/contact", contactRateLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  // Basic input validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, email, message) are required.",
    });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("[Contact Error] Email service credentials are not configured.");
    return res.status(500).json({
      success: false,
      message: "Email service is not configured.",
    });
  }

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

  setImmediate(async () => {
    try {
      await transporter.sendMail(mailOptions);
      console.log("[Contact] Email sent successfully.");
    } catch (error) {
      console.error("[Contact Email Error]", error);
    }
  });

  return res.status(202).json({
    success: true,
    message: "Thanks for reaching out! Your message has been received.",
  });
});

// ─────────────────────────────────────────────
// Start
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});