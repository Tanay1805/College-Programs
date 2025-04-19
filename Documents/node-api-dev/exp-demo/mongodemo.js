import mongoose from "mongoose";

//create connection

mongoose.connect("mongodb://localhost:27017/btechpracs")
.then(()=>{
    console.log("mongo connection successfull")
})
.catch((err)=>{
    console.log(err);
})

//create a schema

const productSchema = mongoose.Schema({
    name:{
        type:String,required:true
    },
    price:{
        type:Number, required:true
    },
    category:{
        type:String,required:true
    },
    brand:{
        type:String,required:true
    }
})

const productModel1 = mongoose.model("products",productSchema);


//inserting a document

// productModel1.create({name:"Iphone14",price:89000,category:"Mobile",brand:"iphone "})
// .then(()=>{
//     console.log("created")
// })
// .catch((err)=>{
//     console.log(err)
// })

// productModel1.find({name:"Samsung M51"})
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
 
//Deletion of the object 
// productModel1.deleteOne({_id:"6740645d611939c23a251505"})
// .then(()=>{
//     console.log("deletion successful")
// })
// .catch((err)=>{
//     confirm.log(err)
// })

//update
// productModel1.updateMany({category:"Mobile"},{price:2000})
// .then(()=>{
//     console.log("Updated")
// })
// .catch((err)=>{
//     console.log(err)
// })
//update 