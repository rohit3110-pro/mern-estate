// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json()); // Add this line to parse JSON bodies

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter); // Add the leading slash

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
