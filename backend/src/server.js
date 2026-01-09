import express from "express";
import { ENV } from "./lib/env.js";
import { db } from "./lib/db.js";

const app= express()

const port=ENV.PORT || 3000

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Server up n running..."})
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}...`);
})