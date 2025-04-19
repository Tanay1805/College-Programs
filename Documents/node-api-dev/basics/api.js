const http = require('http');
const fs = require('fs')
const url = require('url');
const { parse } = require('path');

let productString = fs.readFileSync("./products.json",{encoding:"utf-8"})
const server = http.createServer((req,res)=>{

    const parsedUrl = url.parse(req.url,true)
    // console.log("request handled")
    
    // res.end("ye le")

    if(parsedUrl.pathname === "/users" && req.method === "GET"){
        req.end("Users fethed")
    }
    else if(parsedUrl.pathname === "/users" && req.method === "POST"){
        req.end("Users Created")
    }
    else if(parsedUrl.pathname === "/products" && req.method === "GET" && parsedUrl.query===undefined){
        res.end([productString]);

        // req.end("Products Fetched")
        // fs.readFile("./products.json",{encoding:"utf-8"},(err,productsString)=>{
        //     res.end([productsString])
        // })
    }
    else if(parsedUrl.pathname ==="/products" && req.method==="GET" && parsedUrl.query!=null){

        let id = parsedUrl.query.id;

        let products = JSON.parse(productString);

        let product = products.find((product)=>{
            return product.id === Number(id);
        })
        res.writeHead(200,{"Content-Type":"application/json"})
        // res.end(productString)
        res.end(JSON.stringify(product))
    }
    else{
        res.end("404 not found ")
    }
    
})

server.listen(8000,()=>{
    console.log("server up and running")
})