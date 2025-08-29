import express from 'express';
import departmentRouter from './routes/departmentRoutes.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.use('/api/departments', departmentRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

