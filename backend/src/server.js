import express from "express";
import cors from "cors"
import { ENV } from "./lib/env.js";
import { db } from "./lib/db.js";
import {serve} from "inngest/express"
import { inngest, functions } from "./lib/inngest.js";

const app= express()

//middlewares configuration
app.use(express.json())
app.use(cors({
    origin:[ENV.FRONTEND_URL,"http://localhost:5173",
      "http://127.0.0.1:5173",],
      credentials:true,
}))

const port=ENV.PORT || 3000

app.use("/api/inngest",serve({client:inngest,functions}))

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Server up n running..."})
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}...`);
})