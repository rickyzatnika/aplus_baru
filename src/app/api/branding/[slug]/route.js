import Brandings from "@/models/Branding";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest, { params: { slug } }) {
  await connect();

  try {
    const branding = await Brandings.findOne({slug});
    return new NextResponse(JSON.stringify(branding), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
