import { NextRequest } from "next/server";
import { Resend } from "resend";
import { userConfirmationEmail } from "@/lib/emails/user-confirmation";
import { adminNotificationEmail } from "@/lib/emails/admin-notification";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "architect@entelecht.ai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const [userResult, adminResult] = await Promise.all([
      resend.emails.send({
        from: "Entelecht.ai <architect@entelecht.ai>",
        to: email,
        subject: "We received your message — Entelecht.ai",
        html: userConfirmationEmail(name),
      }),
      resend.emails.send({
        from: "Entelecht.ai <architect@entelecht.ai>",
        to: ADMIN_EMAIL,
        subject: `New inquiry from ${name}`,
        html: adminNotificationEmail(name, email, message),
      }),
    ]);

    if (userResult.error || adminResult.error) {
      console.error("Email send error:", userResult.error, adminResult.error);
      return Response.json(
        { error: "Failed to send emails" },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
