import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        require:false
    }
})

const bookModel = mongoose.model("books",bookSchema);

export default bookModel;