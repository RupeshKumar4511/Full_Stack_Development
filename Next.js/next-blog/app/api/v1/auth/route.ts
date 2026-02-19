import connection from "@/app/libs/db"
import User from "@/app/libs/models/user"
import { NextResponse} from "next/server"


export const GET = async()=>{
    await connection()    
    const users = await User.find({})
    return NextResponse.json(users);
}

export const POST = async(request:Request)=>{
    await connection()
    const body = request.json();
    console.log(body)
    const newUser = new User(body);
    newUser.save()

    return new NextResponse(JSON.stringify(
        {success:true,message:"New user created successsfully",user:newUser}),{status:201})

}