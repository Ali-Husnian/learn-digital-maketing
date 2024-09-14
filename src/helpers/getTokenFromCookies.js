import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

const getTokenFromCookies = (request) => {
  try {
    const token = request.cookies.get("token");
    if (token) {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      return decodedToken.userId;
    }
  } catch (error) {
    NextResponse.json({ error: error.message });
  }
};

export default getTokenFromCookies;
