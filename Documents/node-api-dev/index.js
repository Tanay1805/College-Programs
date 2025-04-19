//Seperations of Concerns the jargon is used for making a clean coding


import express, { Router } from 'express'
import connectDB from './dbconnection.js'
import mongoose from 'mongoose';
import userModel from './models/userModel.js';
import userRouter from "./controllers/userController.js";
import bcrypt from 'bcryptjs'

const app = express();
app.use(express.json())

connectDB()

userModel()
// creating the express API

// using middleware for all endpoints
app.use(express.json());

// connecting to the database
connectDB();

// API endpoints
// users endpoint
app.use("/users", userRouter);

// endpoint to check if the server is running
app.get("/health", (req, res) => {
  res.status(200).send("Server is running");
});

// starting the server
app.listen(8000, () => {
  console.log("Server is up and running on port 8000");
});


//health check 
app.get("/health",(req,res)=>{
    res.send({message:"Server is up"})
})


app.listen(8001,()=>{
    console.log("Server is up and running")
})

