import { Router } from "express";
// AUTH CONTROLLER
import { sayHi, login } from '../controllers/authController.js';
import {getAllCountries, convert, getRateHistorial} from "../controllers/changeRatesController.js"

const router = Router();

// AUTH ROUTES
router.get('/api/sayHi',sayHi)
router.post('/api/login', login)

// CHANGE RATES
router.get("/api/countries",getAllCountries)
router.post("/api/convert",convert)
router.get("/api/historial/:from/:to",getRateHistorial)


export default router;