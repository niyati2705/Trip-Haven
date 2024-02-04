import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";


const app = express();
dotenv.config()

//initial connection
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongodb")
    } catch (error){
    throw error;
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected");
})

// mongoose.connection.on("connected",()=>{
//     console.log(`mongodb connected`);
// })


//middleware
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//error handling middleware
app.use((err,req,res,next)=>{
    const errorStatus = err.status||500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})

app.listen(3000,()=>{
    connect();
    console.log('Server is running on port 3000!');
})

