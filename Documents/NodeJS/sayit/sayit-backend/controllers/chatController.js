import chatModel from "../models/chatModel.js"

export async function chatMsg(req,res){
    let chat = req.body
    try{
    await chatModel.create(chat)
    res.status(201).send({message:"chat created"})
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:"some problem"})
    }
}

export async function getConversation(req,res){
    let loggedid = req.params.loggedid
    let friendid = req.params.friendid

    try{

    let conversation = await chatModel.find(
        {$or:[
            {sender:loggedid,receiver:friendid},
            {sender:friendid,receiver:loggedid}
        ]}).sort({createdAt:1})

    // let loggedmsgs = await chatModel.find({sender:loggedid, receiver:friendid})
    // let friendmsgs = await chatModel.find({sender:friendid,receiver:loggedid})

    // let conversation = [...loggedmsgs,...friendmsgs]
    res.send(conversation)
    }
    catch(err){
        console.log(err)
        res.status.send({message:"Some Problem"})
    }

}