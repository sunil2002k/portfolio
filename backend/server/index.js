const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

app.use(
  cors({
    origin: "https://sunilkunwar.com.np", // Allow requests from your frontend domain
    methods: ["GET", "POST"], // Specify allowed HTTP methods
    credentials: true, // If needed for cookies or authentication
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