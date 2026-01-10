import { Inngest } from "inngest";
import { db } from "./db.js";
import { User } from "../models/User.js";

export const inngest = new Inngest({ id: "code-arena" });

console.log("Reached inngest endpoint...")

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async (event) => {
    console.log(event);
    
    const user = event.data?.user || event.user;
const { id, email_addresses, first_name, last_name, image_url } = user;
    
    console.log("Reached inngest user endpoint...")
            console.log(id,email_addresses[0],first_name,last_name,image_url);


    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage:image_url
    };
    console.log("user created...",newUser);
    
    await User.create(newUser)
  }
);

const deleteUser = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" },
  async (event) => {
        console.log(event);

    const user = event.data?.user || event.user;
const { id } = user;
      console.log(id);
      
    await User.deleteOne({clerkId:id})
  }
);

export const functions=[syncUser,deleteUser]