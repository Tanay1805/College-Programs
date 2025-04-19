import mongoose from "mongoose"

const productsSchema = mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    brand:{type:String,required:true}
},
//This creates two properties createdAt and updatedAt
{timestamps:true})

const productsModel = mongoose.model('products',userSchema)

export default productsModel

