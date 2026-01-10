import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req,res) {
   try {
    //clerk id is used as using this only stream user is created
    const token= chatClient.createToken(req.user.clerkId)

    res.status(200).json({
        msg:"Stream Token created Successfully",
        token:token,
        userId:req.user.id,
        userName:req.user.name,
        userImage:req.user.image
    })
   } catch (error) {
    console.log("Error in getStreamToken:",error);
    res.status(500).json({msg:"Internal Server Error"})
    
   }
}