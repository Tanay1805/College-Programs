import mongoose, { connect } from 'mongoose'


export default function connectDB(){


mongoose.connect("mongodb://localhost:27017/btechpracs")
.then(()=>{
    console.log("Database connected")
})
.catch((err)=>{
    console.log(err)
})
}
