import express from 'express'
import { addBooks } from '../controller/bookController.js'

const router = express.Router()

router.post('/add',addBooks)

export default router
