/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function createCheckoutSession(price: number, courseId: number) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const email = user.emailAddresses?.[0]?.emailAddress;
  const priceToCents = price * 100;
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // create checkout session
  const checkoutSession = await stripe.checkout.sessions.create({
    customer_email: email,
    line_items: [
      {
        price_data: {
          unit_amount: priceToCents,
          currency: "mxn",
          product: "prod_QvjIveDcGyAwIQ",
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.CANONICAL_URL}/curso/${courseId}/modulo/1?success=1`,
    cancel_url: `${process.env.CANONICAL_URL}/curso/${courseId}?cancelled=1`,
    metadata: {
      courseId: courseId,
      userId: user.id,
    },
  });

  // redirect user
  redirect(checkoutSession.url);
}
