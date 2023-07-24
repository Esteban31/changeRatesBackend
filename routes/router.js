import { Router } from "express";
// AUTH CONTROLLER
import { sayHi, login } from '../controllers/authController.js';

const router = Router();

// AUTH ROUTES
router.get('/api/sayHi',sayHi)
router.post('/api/login',login)


export default router;