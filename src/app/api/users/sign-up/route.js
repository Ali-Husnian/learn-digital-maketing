import connection from "@/config/db";
import Users from "@/models/users";

import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

await connection();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    const user = await Users.findOne({ email });
    // check user already exist
    if (user) {
      return NextResponse.json(
        { error: "User already exists." },
        { status: 400 }
      );
    }
    // create hashed Password
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await Users.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      status: 201,
      newUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
