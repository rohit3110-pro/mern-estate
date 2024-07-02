// routes/auth.route.js
import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

export default router; // Export the router as the default export
