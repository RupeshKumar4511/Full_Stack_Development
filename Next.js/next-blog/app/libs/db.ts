import mongoose from 'mongoose'
import { NextResponse } from 'next/server';

const MONGODB_URL = process.env.MONGODB_URL;


const connection = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState == 1) {
        console.log("Already Connected to Database");
        return;
    }

    if (connectionState == 2) {
        console.log("Connecting to Database");
        return;
    }

    try {
        const connect = await mongoose.connect(MONGODB_URL!)
        if (connect) {
            console.log("Database Connected");
        }
    } catch (error:any) {
        console.log(error)
        return new NextResponse("Error in connecting database"+error.message,{status:500})
    }
}

export default connection