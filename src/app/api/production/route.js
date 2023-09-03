import Production from "@/models/Production";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest) {
  await connect();

  try {
    const production = await Production.find({});
    return new NextResponse(JSON.stringify(production), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}

export async function POST(req = NextRequest) {
  await connect();

  try {
    const body = await req.json();
    const newProduction = await Production.create(body);

    return new NextResponse(JSON.stringify(newProduction), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
