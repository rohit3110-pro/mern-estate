// routes/auth.route.js
import express from 'express';
import { google, signin, signOut, signup } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google',google);
router.get('/signout',signOut);

export default router; // Export the router as the default export
