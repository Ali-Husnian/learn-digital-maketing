import connection from "@/config/db";
import Users from "@/models/users";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import sendMail from "@/helpers/sendMail";

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

    const resetLink = `${process.env.URL}/reset-password?token=${token}`;
    const text = `requested a password reset. Click the link to reset your password: ${resetLink}`;
    const subject = "Password Reset Request";
    const html = `<!doctype html>
<html lang="en-US">

<head>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <title>Reset Password Email Template</title>
  <meta name="description" content="Reset Password Email Template.">
  <style type="text/css">
    a:hover {
      text-decoration: underline !important;
    }
  </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
  <!--100% body table-->
  <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
    <tr>
      <td>
        <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td style="height:80px;">&nbsp;</td>
          </tr>

          <tr>
            <td style="height:20px;">&nbsp;</td>
          </tr>
          <tr>
            <td>
              <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                <tr>
                  <td style="height:40px;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="padding:0 35px;">
                    <img src="https://learn-digital-maketing.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75" alt="logo">
                    <br><br>
                    <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                      requested to reset your password</h1>
                    <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                      We cannot simply send you your old password. A unique link to reset your
                      password has been generated for you. To reset your password, click the
                      following link and follow the instructions.
                    </p>
                    <a href='${resetLink}' style="background:#20e277;text-decoration:none !important; font-weight:500; margin:35px 0 35px 0; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                      Password</a>
                  </td>
                </tr>
                <tr>
                  <td style="height:40px;">
                      
                      <div style="background-color:aliceblue ; height: auto; padding: 15px; font-size: 10px">
                          <small><span id="year"></span> © All rights reserved by Learn Digital Marketing. Powered by Bab el Najah.</small>
                      </div>
                  </td>
                </tr>
              </table>
            </td>
          <tr>
            <td style="height:20px;">&nbsp;</td>
          </tr>

          <tr>
            <td style="height:80px;">&nbsp;</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <!--/100% body table-->
</body>
<script>
    const year = new Date().getFullYear()
    document.getElementById("year").innerHTML = year
</script>
</html>`;

    // Setup Send user reset-password email
    sendMail(subject, email, text, html);

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
