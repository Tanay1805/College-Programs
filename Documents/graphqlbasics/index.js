import  express  from "express";
import cors from 'cors';
import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4"
import connectdb from "./dbConnection.js";
import productModel from "./models/productModels.js";



connectdb(); 



const app = express()

const apolloServer = new ApolloServer({
    typeDefs: `
        type Product {
            id: ID!,
            name: String!,
            price: Float!,
            category: String!,
            quantity: Int!,
            imageURL: String!,
            createdAt: String!,
            updatedAt: String!,
        }
        type Query {
            getProducts: [Product]
            getProduct(id: ID): Product
            getProductByName(name: String): Product
        }

        type Mutation{
        delete(id:ID):Boolean
        create(name:String,price:Float,category:String,quantity:Int,imageUrl:String):Product
        update(id:ID,name:String,price:Float,category:String,quantity:Int,imageUrl:String):Product

        }
    `,
    resolvers: {
        Query: {
            getProducts: async () => {
                return await productModel.find()
            },
            getProduct: async (_, { id }) => {
                return await productModel.findById(id)
            },
            getProductByName: async (_, { name }) => {
                return await productModel.findOne({name:name })
            }
        },

        Mutation:{
            delete:async (_,{id})=>{
            let result = await productModel.deleteOne({_id:id})
            if(result.deletedCount!==0){
                return true
            }
            return false;
            },
            create:async(_,{name,price,category,quantity,imageUrl})=>{
                try{
                let product = {name,price,category,quantity,imageUrl}
                return await productModel.create(product)
                }
                catch(err){
                    console.log(err)
                    throw new Error("Some Problem")
                    
                }
            },
            update:async(_,{id,name,price,category,quantity,imageUrl})=>{
                let product = {name,price,category,quantity,imageUrl}

                 return await productModel.findByIdAndUpdate(id,product)

            }

        }
    }

})


app.use(cors())
app.use(express.json())

 await apolloServer.start()

app.use("/graphql",expressMiddleware(apolloServer))

app.listen(8000,()=>
{
    console.log("server is up and running")
})