import connection from "@/config/db";
import Users from "@/models/users";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

await connection();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    const user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist." },
        { status: 400 }
      );
    }

    const tokenData = {
      userId: user._id.toString(),
      email: user.email,
      name: user.name,
    };

    // Use a stronger encryption key
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    // Setup transporter with TLS enabled for security
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 465,
      secure: true, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetLink = `${process.env.URL}/reset-password?token=${token}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
      html: `<p>You requested a password reset. Click the link to reset your password: <a href="${resetLink}">Reset Password</a></p>`,
    });

    return NextResponse.json(
      { message: "Reset link sent to your email." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error); // Better error logging
    return NextResponse.json(
      { error: "Server error, please try again later." },
      { status: 500 }
    );
  }
}
