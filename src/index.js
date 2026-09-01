import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config();

console.log("MONGODB_URL:", process.env.MONGODB_URL);

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`);
        });

        app.on("error", (error) => {
            console.log("ERRORRRRR:", error);
            throw error;
        });
    })
    .catch((error) => {
        console.log("MONGO db connection failed!!!!", error);
    });


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