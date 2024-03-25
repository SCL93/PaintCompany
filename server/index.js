import express from 'express'
import dotenv from 'dotenv'
import './db.js'
import cors from 'cors'
import { UserRouter } from './routes/auth.js'
import { paintsRouter } from './routes/paint.js'
import { usersRouter } from './routes/user.js'


const corsOptions = {
    origin: "https://paintcompany-frontend.onrender.com", // frontend URL (ReactJS)
}

const app = express()
app.use(express.json())
app.use(cors());
dotenv.config()
app.use('/auth', UserRouter)
app.use('/paint', paintsRouter)
app.use('/user', usersRouter)

app.listen(process.env.PORT, ()=>{
    console.log("Server is running");
})