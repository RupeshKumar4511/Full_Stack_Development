import mongoose from 'mongoose'

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
    } catch (error) {
        console.log(error)
    }
}

export default connection