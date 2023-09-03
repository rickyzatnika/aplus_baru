import Event from "@/models/Event";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest) {
  await connect();

  try {
    const event = await Event.find({});
    return new NextResponse(JSON.stringify(event), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}

export async function POST(req = NextRequest) {
  await connect();

  try {
    const body = await req.json();
    const newEvent = await Event.create(body);

    return new NextResponse(JSON.stringify(newEvent), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
