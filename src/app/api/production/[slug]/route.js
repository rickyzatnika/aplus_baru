import Production from "@/models/Production";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest, { params: { slug } }) {
  await connect();

  try {
    const production = await Production.findOne({slug});
    return new NextResponse(JSON.stringify(production), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}



export async function DELETE(req = NextRequest, { params: { slug } }) {
  await connect();

  try {
    await Production.findOneAndDelete({slug});
    return new NextResponse("Production deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
