import { Router } from "express";
import {
    registro,
    login,
    verifyToken,
    protect,
} from "../controllers/login.controller.js";

const router = Router();

router.post('/registro', registro);
router.post('/login', login);
router.get('/protected', verifyToken, protect);

export default router;