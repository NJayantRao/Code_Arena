import { requireAuth } from "@clerk/express";
import { User } from "../models/User.js";

export const protectRoute=[
    requireAuth(),
    async (req,res,next) => {
        try {
            const clerkId=req.auth().usersId;
            if(!clerkId) return res.status(401).json({msg:"Unauthorized or Invalid Token"})
            
            //find user in db by clerkId
            const user= await User.findById(clerkId)

            if(!user) return res.status(404).json({msg:"User not found"})

            req.user= user
            next()
        } catch (error) {
            console.log("Error in protect route middleware:",error);
            
        }
        
    }
]