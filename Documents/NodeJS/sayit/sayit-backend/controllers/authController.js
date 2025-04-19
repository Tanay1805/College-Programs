import bcryptjs from 'bcryptjs'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../constants.js'



export async function userRegister(req, res) {
    let user = req.body

    // hashing
    let salt = bcryptjs.genSaltSync(10)
    let newPassword = bcryptjs.hashSync(user.password, salt)
    user.password = newPassword

    try {
        await userModel.create(user)
        res.status(201).send({ message: "user registered" })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ message: "Some problem" })

    }
}

export async function userLogin(req, res) {
    const userCreds = req.body
    try {
        let user = await userModel.findOne({ username: userCreds.username })
        if (!user) {
            res.status(404).send({ message: "username doesn't exist" })
        }
        else {
            bcryptjs.compare(userCreds.password, user.password, (err, result) => {
                if (!err) {
                    if (result === true) {
                        let token = jwt.sign({ username: user.username }, SECRET_KEY) // sign() is used to generate token to ensure that the user has login
                        res.status(200).send({ token: token, message: "Welcome user" })
                    }
                    else {
                        res.status(401).send({ message: "password is incorrect" })
                    }
                }
                else {
                    res.status(500).send({ message: "Some problem" })
                }
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ message: "Some problem" })
    }
}