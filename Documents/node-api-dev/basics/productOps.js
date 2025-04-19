// const { brands } = require("@fortawesome/fontawesome-svg-core/import.macro")

const fs = require('fs')

// fs.readFile("./products.json",{encoding:"utf-8"},(err,data)=>{
//     if(!err){
//         console.log("printed Data")
//     }
// })

// fs.readFile("./data.json", { encoding: "utf-8" }, (err,data) => {
//     if(err){
//         console.log("error")
//     }
//     let products = JSON.parse(data)
//     for(let i = 0 ;  i<products.length;  i++){
//         console.log(products[i].name)
//     }
// });

let newProduct = {
    id:21,
    name: "Computer Table",
    price: 198,
    category:"Furniture",
    brand:"Zebronic"
}

fs.readFile("./products.json",{encoding:"utf-8"},(err,data)=>
{
    let products = JSON.parse(data)
    products.push(newProduct)

    fs.writeFile("./products.json",JSON.stringify(products),(err)=>{
        if(!err){
            console.log("Successfully added")
        }
    })
}
)