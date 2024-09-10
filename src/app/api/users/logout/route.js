import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successfuly!",
      success: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      maxAge: -1,
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
