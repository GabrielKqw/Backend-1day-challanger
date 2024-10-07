import express from 'express';
import { getUsers, createUser } from '../controllers/userController';
import { authenticate } from '../middlewares/authMiddleware'; // Importe o middleware de autenticação

const router = express.Router();

router.get('/', authenticate, getUsers); // Rota protegida
router.post('/', createUser);

export default router;