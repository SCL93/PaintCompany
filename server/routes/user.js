import express from 'express'
import {users} from '../models/users.js';
const router = express.Router();

// ADD user
router.post('/add', async (req, res) => {
    try {
        const {username, password, role, roles} = req.body;
        if (roles !== 'admin'){
            return res.json({message: "User does not have admin permissions"});
        }
        const newUser = new users ({
            username,
            password,
            role
        })
        await newUser.save()
        return res.json({added: true})
    } catch(err) {
        return res.json({message: "Error in adding new user"})
    }
})

// GET all users
router.get('/users', async (req, res) => {
    try {
        const allUsers = await users.find()
        return res.json(allUsers)
    }catch(err) {
        return res.json(err)
    }
})

// GET individual user by ID
router.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await users.findById({_id: id})
        return res.json(user)
    }catch(err) {
        return res.json(err)
    }
})

// UPDATE individual user by ID
router.put('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {username, password, role, roles} = req.body;
        if (roles !== 'admin'){
            return res.json({message: "User does not have admin permissions"});
        }
        const user = await users.findByIdAndUpdate({_id: id}, {username, password, role})
        return res.json({updated: true, user})
    }catch(err) {
        return res.json(err)
    }
})

// DELETE individual user by ID
router.delete('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const roles = req.body.data
        if (roles !== 'admin'){
            return res.json({message: "User does not have admin permissions"});
        }
        const user = await users.findByIdAndDelete({_id: id})
        return res.json({deleted: true, user})
    }catch(err) {
        return res.json(err)
    }
})


export {router as usersRouter}