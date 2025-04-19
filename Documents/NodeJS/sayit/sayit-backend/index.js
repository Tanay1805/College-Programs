import express from "express";
import cors from 'cors';
import connectDB from "./dbConnection.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import authRouter from './routes/authRouter.js'
import chatRouter from "./routes/chatRouter.js"
import userRouter from './routes/userRouter.js'



//database connection function
connectDB()

const app = express();

//inbuilt middle ware
app.use(cors()) 
app.use(express.json()) 



// public routes
app.use("/auth",authRouter)

//auth middleware
app.use(authMiddleware)  //this middleware will only be used to the endpoints which are below it

//private routes
app.use("/users",userRouter)
app.use("/chat",chatRouter)


app.listen(8000,()=>{
    console.log("Server is UP")
})