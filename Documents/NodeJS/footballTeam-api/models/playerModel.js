import mongoose from "mongoose";

const playerSchema = mongoose.Schema(
    {
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        require:true
    },
    nationality:{
        type:String,
        require:true
    },
    club:{
        type:String,
        require:true
    },
},
    {timestamp:true})

const playerModel = ('player',playerSchema)

export  default playerModel



