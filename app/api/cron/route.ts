import { NextResponse } from "next/server";
import twilio from 'twilio';

import { yearProgress, getWeekAndDayInYear } from "@/lib"

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;   
const client = twilio(accountSid, authToken);

export async function GET(request: Request) {
  if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ message: "Unauthorized" })
  }

  if (!process.env.MY_PHONE_NUMBER) {
    return NextResponse.json({ message: 'Please provide a valid phone number.' })
  }

  const progress = yearProgress();
	const { week, dayOfWeek } = getWeekAndDayInYear();
  const update = `\n\nGood morning!\n\n2024 is ${progress}% complete.\n\nThis is week ${week}, day ${dayOfWeek}.\n`;

  try {
    const message = await client.messages.create({
      body: update,
      from: process.env.TWILIO_PHONE_NUMBER, 
      to: process.env.MY_PHONE_NUMBER 
    });

    console.log(message.sid);
    return NextResponse.json({ ok: true, message: 'SMS sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: 'Failed to send SMS' });
  }
}

