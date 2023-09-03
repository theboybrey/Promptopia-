import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDB is already connected!");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_NAME || "promptopia",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

        console.log("MongoDB is connected!");

    } catch (error) {
        console.log(error.data.message);
    }
}

