import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/config/dB";

connectDb();

const GET = (req: NextRequest) => {
    return NextResponse.json("API VERSION: 0.1")
}

export {
    GET
}