import dotenv from "dotenv";

dotenv.config();

console.log("MONGODB_URL:", process.env.MONGODB_URL);

import connectDB from "./db/index.js";

connectDB();




/*
import express from "express"
const app = express()

const connectDB = async ()=>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERRR:",error)
        throw error
       })
       app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })
    }
    catch(error){
        console.error("ERROR: ",error)
        throw error
    }
}
*/