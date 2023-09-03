import Branding from "@/models/Branding";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest) {
  await connect();

  try {
    const branding = await Branding.find({});
    return new NextResponse(JSON.stringify(branding), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}

export async function POST(req = NextRequest) {
  await connect();

  try {
    const body = await req.json();
    const newBranding = await Branding.create(body);

    return new NextResponse(JSON.stringify(newBranding), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
