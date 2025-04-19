import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const chatModel = mongoose.model("chats",chatSchema)

export default chatModel