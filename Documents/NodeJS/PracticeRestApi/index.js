import express from 'express'
import mongoose from 'mongoose'
import dbConnect from './dbConnect.js';
import  bookRoute from './routes/bookRoute.js'



dbConnect();
const exp = express();

exp.use(express.json())

exp.use("/",bookRoute)
exp.listen(8000,()=>{
console.log("Server is up")
})

