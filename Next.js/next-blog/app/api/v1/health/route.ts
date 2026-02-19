import { NextResponse } from "next/server";

export const GET = () =>{
    return NextResponse.json({status:"OK",message:"Next-Blog"},{status:200})
}