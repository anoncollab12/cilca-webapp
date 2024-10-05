"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function createCheckoutSession(price: number) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const email = user.primaryEmailAddress;

  console.log(user);
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // create checkout session
  const checkoutSession = await stripe.checkout.sessions.create({
    customer_email: "email@test.com",
    line_items: [
      {
        price: "price_1Q3rq7BB2TXl4y44xYYJprXA",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.CANONICAL_URL}`,
    cancel_url: `${process.env.CANONICAL_URL}`,
  });

  // redirect user
  redirect(checkoutSession.url);
}
