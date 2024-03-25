import express from 'express'
import dotenv from 'dotenv'
import './db.js'
import cors from 'cors'
import { UserRouter } from './routes/auth.js'
import { paintsRouter } from './routes/paint.js'
import { usersRouter } from './routes/user.js'

const app = express()
app.use(express.json())
app.use(cors());
dotenv.config()
app.use('/auth', UserRouter)
app.use('/paint', paintsRouter)
app.use('/user', usersRouter)

app.listen(3001, ()=>{
    console.log("Server is running");
})