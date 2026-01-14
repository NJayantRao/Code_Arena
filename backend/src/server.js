import express from "express";
import cors from "cors"
import { ENV } from "./lib/env.js";
import { db } from "./lib/db.js";
import {serve} from "inngest/express"
import { inngest, functions } from "./lib/inngest.js";
import { clerkMiddleware } from '@clerk/express'
import { chatRouter } from "./routes/chatRouter.js";
import { sessionRouter } from "./routes/sessionRouter.js";

const app= express()

//middlewares configuration
app.use(express.json())
app.use(cors({
    origin:[ENV.FRONTEND_URL,"http://localhost:5173",
      "http://127.0.0.1:5173","https://code-arena-psi.vercel.app"],
      credentials:true,
       methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.options(/.*/, cors());


const port=ENV.PORT || 3000

app.use(clerkMiddleware())
app.use("/api/inngest",serve({client:inngest,functions}))

app.use("/api/v1/chat",chatRouter)
app.use("/api/v1/session",sessionRouter)

app.get("/api/v1",(req,res)=>{
    res.status(200).json({msg:"Server up n running..."})
})



app.listen(port,()=>{
    console.log(`Server running on port ${port}...`);
})