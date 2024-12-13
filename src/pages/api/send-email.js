import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { navn, email, emne, besked } = req.body;

  if (!navn || !email || !emne || !besked) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: `"Din Mægler 👤" <maddison53@ethereal.email>`, // Sender address
      to: "recipient@example.com", // Receiver address
      subject: emne, // Email subject
      text: `Navn: ${navn}\nEmail: ${email}\n\nBesked:\n${besked}`, // Plain text body
      html: `<p><strong>Navn:</strong> ${navn}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Besked:</strong><br>${besked}</p>`, // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
