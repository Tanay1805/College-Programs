import express from 'express'
import bookModel from '../model/bookModel.js'

export async function addBooks(req,res){
    let book = req.body
    try{
        await bookModel.create(book)
        res.status(201).send({message:"The data was created"})
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:"Some error occured"})
    }
}

