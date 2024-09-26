import sendMail from "@/helpers/sendMail";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { fname, lname, email, phone, message } = reqBody;

    const subject = `Contact Form Submission from ${fname} ${lname}`;
    const text = `Requested a contact form. Click the link to Open.`;
    const html = `<!doctype html>
      <html lang="en-US">
      <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Contact Form</title>
        <meta name="description" content="Contact Form Email Template.">
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
                            requested to contact form.</h1>
                          <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                          <div style="margin-bottom: 25px">
                              <table style="text-align:left;width: 100%;  max-width:500px;background-color:#f8f8f8;border-radius:3px;font-family:helvetica;" cellpadding="10">
                                <tr>
                                  <th width='150px'>Name</th>
                                  <td>${fname} ${lname}</td>
                                </tr>
                                <tr>
                                  <th>Email</th>
                                  <td>${email}</td>
                                </tr>
                                <tr>
                                  <th>Phone</th>
                                  <td>${phone}</td>
                                </tr>
                                <tr>
                                  <th>Message</th>
                                  <td>${message}</td>
                                </tr>
                              </table>
                          </div>
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
    sendMail(subject, "pkihusnain220@gmail.com", text, html);
    return NextResponse.json(
      { message: "Sent to your email." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Server error, please try again later." },
      { status: 500 }
    );
  }
}
