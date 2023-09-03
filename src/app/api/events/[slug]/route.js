import Events from "@/models/Event";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest, { params: { slug } }) {
  await connect();

  try {
    const event = await Events.findOne({slug});
    return new NextResponse(JSON.stringify(event), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
