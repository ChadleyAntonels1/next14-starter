// import mongoose from "mongoose"

// const connection = {};

// export const connectToDb = async () => {
//   try {
//     if(connection.isConnected) {
//       console.log("\x1b[42m","mongo is connected");
//       return;
//     }
//     const db = await mongoose.connect(process.env.MONGO,!process.env.MONGODB_URI,);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.log("\x1b[41m", '%c mongo not connected');
//     throw new Error(error);
//   }
// };

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI
const mongo = process.env.MONGO
const options ={}

let mongoClient

if(!process.env.MONGODB_URI){
  throw new Error("please add your Mongo URI to .env.local")
}

export async function connectToDb(){
  try {
    if(MongoClient){
      return{MongoClient}
    }
    mongoClient= await(new MongoClient(uri,mongo,options)).connect()
    console.log("Mongo Connected!")
    return{MongoClient}
  } catch (error) {
    console.error(error)
  }
}