import Contact from "@/models/Contact";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req = NextRequest) {

  await connect();

  try {

    const contact = await Contact.find({});
    return new NextResponse(JSON.stringify(contact), {status: 200});

  } catch (error) {
    return new NextResponse(JSON.stringify({message : "server not responding"}), {status: 500})
  }

}