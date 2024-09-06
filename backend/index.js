import express from 'express'

import cookieParser from 'cookie-parser'
// Middleware to parse cookies
import path from 'path'

const app = express();
import mongoose from 'mongoose'
app.use(express.json());
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'
import publicRoutes from  './routes/publicRoutes.js'
app.use(cookieParser());
app.use("/auth/user", userRouter)
app.use("/auth/user", authRouter)
app.use("/auth/get", publicRoutes)



const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB', error));



    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'frontend','dist','index.html'))
    })

    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal server Error'
        return res.status(statusCode).json({
            success: false,
            statusCode,
            message,
        }) 
    
    })



    app.listen(port, () => {
        console.log(`server is listening on port ${port}`)
    })
    