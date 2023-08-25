import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(){
    let data = user;
    return NextResponse.json(data, {status:200});
}

export async function POST(request){
    let payload = await request.json();
    if(!payload.name || !payload.age || !payload.email) {
        return NextResponse.json({result: "You did not add all the values", success:false}, {status:400})
    }else {
        return NextResponse.json({result: payload, success:true}, {status: 200})
    }
}