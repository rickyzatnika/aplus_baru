import Events from "@/models/Event";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest) {
  await connect();

  try {
    const service = await Events.find({});
    return new NextResponse(JSON.stringify(service), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}

export async function POST(req = NextRequest) {
  await connect();

  try {
    const body = await req.json();
    const newEvent = await Events.create(body);

    return new NextResponse(JSON.stringify(newEvent), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
