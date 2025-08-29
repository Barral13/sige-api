import express from 'express';
import departmentRouter from './routes/departmentRoutes.js';
import positionRouter from './routes/positionRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.use('/api/departments', departmentRouter);
app.use('/api/positions', positionRouter);


// Porta do .env ou padrão 3000
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

