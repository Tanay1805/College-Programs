import mongoose from "mongoose";

export default function dbConnect(){
    mongoose.connect("mongodb://localhost:27017/FootballTeam")
    try{
        console.log("Server up and running")
    }
    catch(err){
        console.log(err)
    }
}