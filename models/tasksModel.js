import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    dueDate: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users", // schema name from mongoDb 
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


export const Task = mongoose.model("tasks", taskSchema);