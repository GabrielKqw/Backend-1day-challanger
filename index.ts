import express from 'express';
import userRoutes from './src/routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

export default app;