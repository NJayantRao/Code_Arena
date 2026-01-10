import { Inngest } from "inngest";
import { db } from "./db.js";
import { User } from "../models/User.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

export const inngest = new Inngest({ id: "code-arena" });

console.log("Reached inngest endpoint...")

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async (event) => {
    console.log(event);
    
    const user = event.event.data
const { id, email_addresses, first_name, last_name, image_url } = user;
    
    console.log("Reached inngest user endpoint...")
            console.log(id,email_addresses[0],first_name,last_name,image_url);
const primaryEmail =
  user.email_addresses?.find(e => e.id === user.primary_email_address_id)?.email_address ||
  user.email_addresses?.[0]?.email_address ||
  null;


    const newUser = {
      clerkId: id,
      email: primaryEmail,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage:image_url
    };
    console.log("user created...",newUser);
    
    await User.create(newUser)

    await upsertStreamUser({
      id:newUser.clerkId.toString(),
      name:newUser.name,
      image:newUser.profileImage
    })
  }
);

const deleteUser = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" },
  async (event) => {
        console.log(event);

const user = event.event.data
const { id } = user;
      console.log(id);
      
    await User.deleteOne({clerkId:id})
    await deleteStreamUser(id.toString())
  }
);

export const functions=[syncUser,deleteUser]