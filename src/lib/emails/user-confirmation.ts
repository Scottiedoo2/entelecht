export function userConfirmationEmail(name: string) {
  const firstName = name.split(" ")[0];
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>We received your message</title>
</head>
<body style="margin:0;padding:0;background-color:#F5F0EB;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1A1A1A;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F0EB;">
<tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:8px;overflow:hidden;">

<!-- Header -->
<tr><td style="background-color:#1A1A1A;padding:32px 40px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td style="font-size:22px;font-weight:400;color:#F5F0EB;letter-spacing:-0.02em;">
      Entelecht<span style="color:#B8975C;">.ai</span>
    </td>
  </tr>
  </table>
</td></tr>

<!-- Accent bar -->
<tr><td style="height:3px;background:linear-gradient(90deg,#B8975C,#5B8A72);font-size:0;line-height:0;">&nbsp;</td></tr>

<!-- Body -->
<tr><td style="padding:40px;">
  <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#6B7280;">
    Hello ${firstName},
  </p>
  <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#1A1A1A;">
    Thank you for reaching out. We&rsquo;ve received your message and will be in touch shortly.
  </p>
  <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#1A1A1A;">
    At Entelecht, we&rsquo;re building the governance infrastructure for autonomous AI&mdash;the deterministic binding layer between what humans declare and what AI systems do.
  </p>
  <p style="margin:0 0 32px;font-size:15px;line-height:1.7;color:#1A1A1A;">
    We look forward to connecting with you.
  </p>

  <!-- CTA -->
  <table role="presentation" cellpadding="0" cellspacing="0">
  <tr><td style="background-color:#1A1A1A;border-radius:6px;">
    <a href="https://entelecht.ai" target="_blank" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:500;color:#F5F0EB;text-decoration:none;">
      Visit Entelecht.ai &rarr;
    </a>
  </td></tr>
  </table>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;border-top:1px solid #EDE8E2;">
  <p style="margin:0;font-size:11px;line-height:1.6;color:#6B7280;">
    &copy; 2026 Spiral Protocol Foundation
  </p>
  <p style="margin:4px 0 0;font-size:11px;line-height:1.6;color:#6B7280;">
    <a href="mailto:architect@entelecht.ai" style="color:#5B8A72;text-decoration:none;">architect@entelecht.ai</a>
  </p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}
