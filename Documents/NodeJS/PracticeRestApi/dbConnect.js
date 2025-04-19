import mongoose from "mongoose";

export default function dbConnect(){
    mongoose.connect("mongodb://localhost:27017/library")
    .then(()=>{
        console.log("Database Up and Running")
    })
    .catch((err)=>{
        console.log(err);
    })
    
}