import express from 'express'
import {users} from '../models/users.js'
const router = express.Router();

// login API
router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    console.log(username);
    const user = await users.findOne({"username": username})
    console.log(user);
    if (!user){
        return res.json({message: "user not registered"});
    }
    if (user.password !== password){
        return res.json({message: "incorrect password"});
    }
    return res.json({login: true, role: user.role})
})

export {router as UserRouter}