import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    let data = user;
    let currentId = content.params.userId;
    let userData = data.filter(item => item.id == currentId)
    return NextResponse.json(userData.length == 0 ? { user: "Not Found", success: false } : { user: userData, success: true }, { status: 200 });
}

export function POST(){
    return NextResponse.json({result:"Hello"})
}