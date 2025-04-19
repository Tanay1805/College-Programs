// // const express = require('express')
// // import express from 'express'
// const http = require('http')


// http.createServer ((req,res)=>{
//     console.log("started")
// }).listen(8001,()=>{
//     console.log("server is up and running")
// })

// import { doSomething } from "./data.js";
// import connect from "./data.js";

// doSomething()
// connect()

import express from 'express'

const app = express()

let dummyProducts = [
    {id:1,name:"Samsung M5"},
    {id:2,name:"Iphone 14"},
    {id:3,name:"Google pixel"}]

app.get("/products/id/:id",(req,res)=>{
    res.send({name:'Tanay Sahajwalla', age:22})
    return p.id === Number(req.params.id)
});
app.get("/products/name/:name",(req,res)=>{
    res.send({name:'Tanay Sahajwalla', age:22})
});

app.post("/users",(req,res)=>{

});
app.delete("/items/id/:id",(req,res)=>{
    console.log(req.params.id)
    res.send({status:true,message:"Delete request success"})
});
app.delete("/items/name/:name",(req,res)=>{
    console.log(req.params.name)
    res.send({status:true,message:"Delete request success"})
});
app.put("/todos/:id",(req,res)=>{
    console.log(req.params.id)
    res.send({status:true,message:"Put request success"})
});
app.patch("/cart/:id",(req,res)=>{
    console.log(req.params.id)
    res.send({status:true,message:"Patch request success"})
});

app.listen(8001,()=>{
    console.log("server is running")
});