import userModel from "../models/userModel.js";

export async function searchByUsername(req,res){
    const username = req.params.username;

    try{

        let users = await userModel.find({username:{$regex:username, $options:'i'}})        //we are making a regex so that while wrting initails only it will start giving suggestions just like whats app searching
        res.send(users)
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:"Some problem"})
    }
}
