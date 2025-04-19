import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name:{          
        type:String,
        required:[true,"Name is Required"]////this is validation if name is not entered then this will come so that user can understand
    }, 
    username:{
        type:String,
        required:true,
        unique:[true,"Username already exists"],
        min:[4,"Username too short"]
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","male","female"]
    },
    profilePic:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fuser-avatar&psig=AOvVaw1R6iRZlTlWG12fFODt-eKa&ust=1732686509852000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCEr7Km-YkDFQAAAAAdAAAAABAE"
    }

},{timestamps:true})

const userModel = mongoose.model("users",userSchema)

export default userModel