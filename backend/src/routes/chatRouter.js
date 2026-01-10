import express from "express";
import { getStreamToken } from "../controllers/chatController.js";
import { protectRoute } from "../middlewares/protectAuth.js";
const router= express.Router()
const chatRouter= router

router.get("/token",protectRoute,getStreamToken)

export {chatRouter}