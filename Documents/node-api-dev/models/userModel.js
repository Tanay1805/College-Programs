import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true}
},
//This creates two properties createdAt and updatedAt
{timestamps:true})

const userModel = mongoose.model('users',userSchema)

export default userModel


