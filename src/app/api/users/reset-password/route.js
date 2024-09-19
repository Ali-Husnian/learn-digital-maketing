import connection from "@/config/db";
import Users from "@/models/users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

await connection();

export async function POST(request) {
  try {
    const { token, newPassword } = await request.json();

    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;

    // Find the user by ID
    const user = await Users.findById(userId);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid token or user not found" },
        { status: 400 }
      );
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json(
      { message: "Password has been reset successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error();
    return NextResponse.json(
      { error: `Token is expired resetting password` },
      { status: 500 }
    );
  }
}
