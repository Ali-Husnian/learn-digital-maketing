import connection from "@/config/db";
import Users from "@/models/users";

import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

await connection();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await Users.findOne({ email });
    // check user already exist
    if (!user) {
      return NextResponse.json(
        { error: "User does not exists." },
        { status: 400 }
      );
    }
    // check if password is correct
    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json({ error: "Invalid password." }, { status: 400 });
    }

    // create token data
    const tokenData = {
      userId: user._id.toString(),
      email: user.email,
      name: user.name,
    };
    // create token
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY);

    const response = NextResponse.json({
      message: "sign-in successful!",
      success: true,
    });

    response.cookies.set("token", token, {
      maxAge: 60 * 60 * 24 * 1, // 1 day
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
