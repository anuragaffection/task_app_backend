import Express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { createTask, myTasks, updateTask, deleteTask, getAllTasks, getTaskById } from '../controllers/taskControllers.js'

const router = Express.Router();

router.post('/new', isAuthenticated, createTask);
router.get('/mytasks', isAuthenticated, myTasks);
router.put('/:id', isAuthenticated, updateTask);
router.delete('/:id', isAuthenticated, deleteTask);
router.get('/alltasks', getAllTasks);
router.get('/task/:id', isAuthenticated, getTaskById);


export default router;