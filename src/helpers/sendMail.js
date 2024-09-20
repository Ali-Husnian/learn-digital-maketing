import nodemailer from "nodemailer";
const sendMail = async (subject, toEmail, text, html) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject,
    text,
    html,
  });
};

export default sendMail;
