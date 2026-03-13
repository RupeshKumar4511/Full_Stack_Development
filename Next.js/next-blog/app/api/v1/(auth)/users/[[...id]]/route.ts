import connection from "@/app/libs/db"
import User from "@/app/libs/models/user"
import { NextRequest, NextResponse } from "next/server"
import { Types } from 'mongoose'

const ObjectId = Types.ObjectId;



export const GET = async (request:NextRequest,
    { params }: { params: Promise<{ id: string }> }
) => {
    await connection()
    try {
        const users = await User.find({})
        const {id} = await params;
        console.log(id[0]);
        return new NextResponse(JSON.stringify({ success: true, users: users }));
    } catch (error: any) {
        console.log(error);
        return new NextResponse(JSON.stringify({ success: false, error: "Internal Server Error" }), { status: 500 });
    }
}

export const POST = async (request: Request) => {
    await connection();
    const body = await request.json();
    console.log(body)

    const newUser = new User(body);
    await newUser.save()

    return new NextResponse(JSON.stringify(
        { success: true, message: "New user created successsfully", user: newUser }), { status: 201 })

}