import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../constants.js'

export default function authMiddleware(req, res, next) {
    if (req.headers.authorization !== undefined) {
        let tokenString = req.headers.authorization
        let token = tokenString.split(" ")[1]
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (!err) {
                return next()
            }
            else {
                res.status(403).send({ message: "Invalid or expired token" })
            }
        })
    }
    else {
        res.status(403).send({ message: "Authorization token not present" })
    }
}