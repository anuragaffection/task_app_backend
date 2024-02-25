import Express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { userRegister, userLogin, userLogout, getMyProfile, getUserById } from "../controllers/userControllers.js";


const router = Express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/logout', userLogout);
router.get('/getmyprofile', isAuthenticated, getMyProfile);
router.get('/:id', getUserById)


export default router;