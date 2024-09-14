// pages/api/checkout.js
import connection from "@/config/db";
import Purchase from "@/models/perchase";
import { NextResponse } from "next/server";

// Ensure the database connection is established
await connection();

// export async function GET(request) {
//   try {
//     const userId = getTokenFromCookies(request);
//     const purchase = await Purchase.findOne({ userId });
//     return NextResponse.json({
//       purchase: purchase ? purchase.toObject() : null,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

export async function POST(request) {
  // Parse the request body to get the purchase data
  const reqBody = await request.json();
  // const userId = getTokenFromCookies(request);
  const { userEmail, itemDetails, price, userId } = reqBody;

  try {
    // Check if the user already purchased the same item
    const existingPurchase = await Purchase.findOne({
      userId,
      userEmail,
      itemDetails,
    });

    if (existingPurchase) {
      // Return a 400 status with an error message if the item is already purchased
      return NextResponse.json(
        { error: "You have already purchased this item." },
        { status: 400 }
      );
    }
    // Create a new purchase record
    const newPurchase = new Purchase({
      userEmail,
      itemDetails,
      price,
      userId,
    });

    // Save the purchase to the database
    await newPurchase.save();

    // Return a success message with a 201 status
    return NextResponse.json(
      { message: "Purchase saved successfully.", success: true },
      { status: 201 }
    );
  } catch (error) {
    // Handle and return any errors with a 500 status
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
