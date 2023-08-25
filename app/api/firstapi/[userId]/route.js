import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    let data = user;
    let currentId = content.params.userId;
    let userData = data.filter(item => item.id == currentId)
    return NextResponse.json(userData.length == 0 ? { user: "Not Found", success: false } : { user: userData, success: true }, { status: 200 });
}

export async function PUT(request,content){
    let payload = await request.json();
    payload.id = content.params.userId;
    if(!payload.id || !payload.name || !payload.age || !payload.email) {
        return NextResponse.json({result: "You did not add all the values", success:false}, {status:400})
    }else {
        return NextResponse.json({result:payload, success:true}, {status: 200})
    }
}

export async function DELETE(request,content){
    let id = content.params.userId;
    if(id) {
        return NextResponse.json({result: "User Deleted", success:true}, {status:200})
    }else {
        return NextResponse.json({result:"Some Error Occured", success:true}, {status: 400})
    }
}
