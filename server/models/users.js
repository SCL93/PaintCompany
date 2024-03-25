import mongoose from "mongoose";

// role stored as Number for easier manipulation/changes (mapped to permission in front-end)
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true
    }
})

const UserModel = mongoose.model("users", UserSchema);
export {UserModel as users};