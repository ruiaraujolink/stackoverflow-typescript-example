import express from 'express';
import userRoutes from './userRoutes';

const router = express.Router();

router.use('/v1/utilizadores', userRoutes);

export default router;
