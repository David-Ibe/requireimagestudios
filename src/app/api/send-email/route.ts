import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Define the expected request body shape
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Initialize SES client with environment variables
const sesClient = new SESClient({
  region: "us-east-1", // Replace with your SES region if different
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// POST handler for the /api/send-email route
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();

    // Validate the request body
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format (basic regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare SES email parameters
    const params = {
      Source: "info@requireimagestudios.com", // Sender email (must be verified in SES)
      Destination: {
        ToAddresses: ["info@requireimagestudios.com"], // Recipient email
      },
      ReplyToAddresses: [email], // User's email for reply-to
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}`,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            Charset: "UTF-8",
          },
        },
      },
    };

    // Send the email using SES
    const command = new SendEmailCommand(params);
    await sesClient.send(command);

    // Log success (for debugging in production)
    console.log(`Email sent successfully from ${email}`);

    // Return success response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Log the error for debugging
    console.error("Error sending email:", error);

    // Handle specific SES errors
    if (error instanceof Error) {
      if (error.name === "MessageRejected") {
        return NextResponse.json(
          { error: "Email rejected by SES. Check sender/recipient verification." },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: "An unexpected error occurred while sending the email" },
      { status: 500 }
    );
  }
}

// Optional: Add a GET handler to prevent unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST to send an email." },
    { status: 405 }
  );
}