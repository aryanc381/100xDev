import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    return NextResponse.json({
        status: 200,
        name: "Aryan",
        email: "aryancwork381@gmail.com"
    });
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const header_one = req.headers.get("name");
    const query = req.nextUrl.searchParams.get("name");

    return NextResponse.json({
        msg: "You are signed in!"
    });
}