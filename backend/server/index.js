const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: [
      "https://www.sunilkunwar.com.np", // Your production domain with www.
      "https://sunilkunwar.com.np",     // Your production domain without www.
      "http://localhost:3000"           // For your local frontend development
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: `"${name}" <${email}>`,
      to: "kunwarsunil093@gmail.com",
      subject: "New Contact Message",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully ✨" });
  } catch (error) {
    console.error("Contact Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Message failed to send." });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});