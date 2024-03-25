import express from 'express'
import {paints} from '../models/paints.js';
const router = express.Router();

// ADD paint
router.post('/add', async (req, res) => {
    try {
        const {name, quantity, roles} = req.body;
        if (roles !== 'view/edit'){
            return res.json({message: "User does not have edit permissions"});
        }
        const newPaint = new paints ({
            name,
            quantity
        })
        await newPaint.save()
        return res.json({added: true})
    } catch(err) {
        return res.json({message: "Error in adding new paint"})
    }
})

// GET all paints
router.get('/paints', async (req, res) => {
    try {
        const allPaint = await paints.find()
        return res.json(allPaint)
    }catch(err) {
        return res.json(err)
    }
})

// GET individual paint by ID
router.get('/paint/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const paint = await paints.findById({_id: id})
        return res.json(paint)
    }catch(err) {
        return res.json(err)
    }
})

// UPDATE individual paint by ID
router.put('/paint/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {name, quantity, roles} = req.body;
        if (roles !== 'view/edit'){
            return res.json({message: "User does not have edit permissions"});
        }
        const paint = await paints.findByIdAndUpdate({_id: id}, {name,quantity})
        return res.json({updated: true, paint})
    }catch(err) {
        return res.json(err)
    }
})

// DELETE individual paint by ID
router.delete('/paint/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const roles = req.body.data
        if (roles !== 'view/edit'){
            return res.json({message: "User does not have edit permissions"});
        }
        const paint = await paints.findByIdAndDelete({_id: id})
        return res.json({deleted: true, paint})
    }catch(err) {
        return res.json(err)
    }
})

export {router as paintsRouter}