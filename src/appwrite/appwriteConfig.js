import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_PROJECT_ID);

export const account = new Account(client);
export const database = new Databases(client);
