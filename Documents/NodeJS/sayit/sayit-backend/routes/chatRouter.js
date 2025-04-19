import express from "express"
import { chatMsg, getConversation } from "../controllers/chatController.js"

const router = express.Router()

router.post("/",chatMsg)

router.get("/:loggedid/:friendid",getConversation)
export default router

