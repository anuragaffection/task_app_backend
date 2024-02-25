import { Task } from "../models/tasksModel.js";

export const createTask = async (req, res) => {
    const { title, dueDate, description } = req.body;

    const task = await Task.create({
        title,
        dueDate,
        description,
        user: req.user
    })

    res.status(201).json({
        success: true,
        message: "Task Created Successfully",
        data: task
    })
}


export const myTasks = async (req, res) => {
    const userId = req.user._id;  // _id = coming from mongodb _id 

    // find 
    // findOne 
    // Task = schema in mongoDB 
    const userTasks = await Task.find({ user: userId });

    res.status(200).json({
        success: true,
        data: userTasks
    })
}


export const updateTask = async (req, res) => {
    const { title, dueDate, description } = req.body;
    const id = req.params.id; // taking id from frontend 
    const task = await Task.findById(id); // Task = finding in monogdb 

    if (!task) return res.status(404).json({
        success: false,
        message: "Invalid id"
    })

    task.title = title;
    task.dueDate = dueDate;
    task.description = description;
    task.save();

    res.json({
        success: true,
        message: "Updating Tasks",
        data: task
    })
}


export const deleteTask = async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);

    if (!task) return res.status(404).json({
        success: false,
        message: "Invalid id"
    })

    await task.deleteOne(); 

    res.json({
        success: true,
        message: "Task Deleted"
    })
}


export const getAllTasks = async (req, res) => {
    const tasks = await Task.find();

    if (!tasks) return res.status(404).json({
        success: false,
        message: "There is no Tasks in our db "
    })

    res.json({
        success: true,
        message: "All Tasks are here ",
        data: tasks
    })
}


export const getTaskById = async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);

    if (!task) return res.status(404).json({
        success: false,
        message: "Invalid id"
    })

    res.json({
        success: true,
        message: "Your Tasks",
        data: task
    })
}

