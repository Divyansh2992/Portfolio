const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors"); // Allow frontend to communicate with backend
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // Change from 465 to 587
    secure: false, // Use `false` for port 587
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App Password from Google
    },
    tls: {
        rejectUnauthorized: false, // Bypass TLS issues
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});
// Handle contact form submission
app.post("/contact", async (req, res) => {
    const { firstname,lastname,email,phone, feedback } = req.body;

    try {
        // 1️⃣ Send Feedback to Portfolio Owner
        await transporter.sendMail({
            from: email,
            to: "divyanshvijay92@gmail.com",
            subject: "New Portfolio Feedback",
            text: `You received a new feedback:\n\n First-Name:${firstname}\n Last-Name:${lastname}\n Phone:${phone}\n Email: ${email}\nFeedback: ${feedback}`,
        });

        // 2️⃣ Send Thank You Email to the User
        await transporter.sendMail({
            from: "divyanshvijay92@gmail.com",
            to: email,
            subject: "Thank You for Your Feedback!",
            text: `Hello,\n\nThank you for reaching out! I appreciate your feedback and will get back to you soon.\n\nBest,\nDivyansh Vijay`,
        });

        res.json({ success: true, message: "Feedback sent successfully!" });
    } catch (error) {
        console.error("Error sending emails:", error);
        res.status(500).json({ success: false, message: "Error sending emails." });
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
