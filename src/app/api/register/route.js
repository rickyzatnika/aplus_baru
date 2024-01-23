import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req = NextRequest) {
  try {
    await connect();
    const {username, email, password, passwordRepeat} = await req.json();
    const exist = await User.findOne({$or: [{email}, {username}] });

    if(exist) {
      return new NextResponse(JSON.stringify({message: "username or email already exists"}), { status: 500 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    if(password !== passwordRepeat ){
      return new NextResponse(JSON.stringify({message: "password does not match"}), { status: 401 });
    }
    await newUser.save();
    return new NextResponse(JSON.stringify({message: "Success"}), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Ups sorry, Server not responding"}), { status: 500 });
  }
}
