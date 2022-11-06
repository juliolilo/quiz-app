import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect(process.env.PASSWORD)
    console.log("Database Connected")
}