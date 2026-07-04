import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connectionURI = await mongoose.connect(process.env.MONGO_URI);
        console.log(connectionURI.connection.host, "MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectDB;