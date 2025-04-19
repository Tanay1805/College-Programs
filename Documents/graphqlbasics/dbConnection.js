import mongoose from "mongoose";

export default  function connectDB(){
    mongoose.connect("mongodb://localhost:27017/pms")
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}