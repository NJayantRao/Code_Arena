import mongoose from "mongoose"
import { ENV } from "./env.js";

mongoose.connect(ENV.DB_URL);
const db= mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Server connected successfully...");
});

db.on("error", () => {
  console.log("Error in connecting Mongo DB Server...");
});

db.on("disconnected", () => {
  console.log("Mongo DB Server disconnectd...");
});

export {db};
