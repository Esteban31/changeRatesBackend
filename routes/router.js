import { Router } from "express";

// TEMPLATE
import {post, get, deletee, put} from '../controllers/template.js';



const router = Router();



// AUTH ROUTES
router.post('/api/signup',post)
router.get('/api/authstate',get)
router.delete('/api/deletepost/:id',deletee);
router.put('/api/updatecomment',put);


export default router;