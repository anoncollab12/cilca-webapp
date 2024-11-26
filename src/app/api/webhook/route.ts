import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { db } from "drizzle.config";
import { enrollment } from "~/server/db/schema";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature")!;

  let event: Stripe.Event;

  try {
    event = Stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse(`Webhook error: ${error.message}`, {
        status: 400,
      });
    }
    return new NextResponse("Webhook error: unknown error", { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;
  const courseId = session?.metadata?.courseId;
  if (event.type === "checkout.session.completed") {
    if (!userId || !courseId) {
      return new NextResponse("Missing metadata", { status: 400 });
    }

    await db
      .insert(enrollment)
      .values({ cursoId: Number(courseId), userId: userId });
  } else {
    return new NextResponse("Unhandled event type", { status: 200 });
  }

  return new NextResponse(null, { status: 200 });
}
