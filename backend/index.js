import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/db.js';
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to TrackForge API');
});
//routes

//import User Routes
import userRoutes from './routes/user.routes.js';

//User routes
app.use('/api/v1/users', userRoutes);

connectDB().then(()=>{
    app.listen(process.env.PORT || 3001,()=>{
        console.log(`Server is running on port ${process.env.PORT || 3001}`);
    })    
})
