import axios from "axios";
import  axiosInstance  from "../lib/axios";
import { useAuth } from "@clerk/clerk-react";

    
    export const createSession= async ({data,token}) => {
console.log(token);

    const response = await axiosInstance.post("/session",data,
         {headers:{
            Authorization:`Bearer ${token}`
         }}
         );
    console.log(response);
    
    return response.data
} 

export const getActiveSessions= async()=>{
    const response= await axiosInstance.get("/session/active")
    return response.data
} 

export const getMyRecentSessions= async()=>{
    const response= await axiosInstance.get("/session/myRecent",)
    return response.data
} 

export const getSessionById= async(id)=>{
    const response= await axiosInstance.get(`/session/${id}`)
    return response.data
} 

export const joinSession= async(id)=>{
    const response= await axiosInstance.get(`/session/${id}/join`)
    return response.data
} 
export const endSession= async(id)=>{
    const response= await axiosInstance.get(`/session/${id}/end`)
    return response.data
} 

export const getStreamToken= async()=>{
    const response= await axiosInstance.get(`/chat/token`)
    return response.data
} 
