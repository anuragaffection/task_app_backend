import Express from "express";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import cors from "cors";
import userRouter from './routes/userRoute.js'
import taskRouter from './routes/taskRoute.js'

dotenv.config();
const app = Express();
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URL, {
    dbName: "Task_App"
}).then(() => console.log("Mongodb is connected"));


app.use(Express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))


// routing 
app.get('/', (req, res) => {
    res.json({
        "message": "Server is Running"
    })
})


// routing 
app.use('/users', userRouter);
app.use('/tasks', taskRouter);


// listening the server 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})