import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { ENV } from "./env.js";

const apikey = ENV.STREAM_API_KEY;
const apisecret = ENV.STREAM_API_SECRET;

if (!apikey || !apisecret) {
  console.error("STREAM_API_KEY or STREAM_API_SECRET not found.");
}

export const chatClient = StreamChat.getInstance(apikey, apisecret); //for chat features
export const streamClient = new StreamClient(apikey, apisecret); //for video calls

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("user upserted to stream successfully...", userData);
  } catch (error) {
    console.log(("error in upserting user data:", error));
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("user deleted from stream successfully...");
  } catch (error) {
    console.log(("error in deleting user:", error));
  }
};
