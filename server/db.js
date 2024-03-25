import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const Connection = async () => {
    try {
        mongoose.connect('mongodb+srv://sungchilau:6ndjtLnDwNTyjZqf@cluster0.z5eqhb2.mongodb.net/Project')
        console.log("Connected")
    } catch (err){
        console.log("Error" + err)
    }
}
Connection();