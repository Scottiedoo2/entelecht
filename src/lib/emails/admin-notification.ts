export function adminNotificationEmail(name: string, email: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>New contact form submission</title>
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
    <td align="right" style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#5B8A72;">
      New Inquiry
    </td>
  </tr>
  </table>
</td></tr>

<!-- Accent bar -->
<tr><td style="height:3px;background:linear-gradient(90deg,#B8975C,#5B8A72);font-size:0;line-height:0;">&nbsp;</td></tr>

<!-- Body -->
<tr><td style="padding:40px;">
  <p style="margin:0 0 24px;font-size:14px;line-height:1.7;color:#6B7280;">
    A new message has been submitted through the Entelecht.ai contact form.
  </p>

  <!-- Details card -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F0EB;border-radius:6px;margin-bottom:24px;">
  <tr><td style="padding:24px;">

    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#6B7280;">Name</p>
    <p style="margin:0 0 20px;font-size:15px;color:#1A1A1A;font-weight:500;">${name}</p>

    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#6B7280;">Email</p>
    <p style="margin:0 0 20px;font-size:15px;">
      <a href="mailto:${email}" style="color:#5B8A72;text-decoration:none;">${email}</a>
    </p>

    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#6B7280;">Message</p>
    <p style="margin:0;font-size:15px;line-height:1.7;color:#1A1A1A;">${message || '<span style="color:#6B7280;font-style:italic;">No message provided</span>'}</p>

  </td></tr>
  </table>

  <!-- Reply CTA -->
  <table role="presentation" cellpadding="0" cellspacing="0">
  <tr><td style="background-color:#B8975C;border-radius:6px;">
    <a href="mailto:${email}" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:500;color:#1A1A1A;text-decoration:none;">
      Reply to ${name.split(" ")[0]} &rarr;
    </a>
  </td></tr>
  </table>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;border-top:1px solid #EDE8E2;">
  <p style="margin:0;font-size:11px;line-height:1.6;color:#6B7280;">
    &copy; 2026 Spiral Protocol Foundation &middot; This is an automated notification from the contact form.
  </p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}
