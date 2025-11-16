import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Input sanitization (basic XSS prevention)
    const sanitizedName = name.trim().replace(/[<>]/g, '');
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = message.trim().replace(/[<>]/g, '');

    // Business logic - in production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM
    
    console.log('Contact form submission:', {
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Security: Only allow POST method
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}