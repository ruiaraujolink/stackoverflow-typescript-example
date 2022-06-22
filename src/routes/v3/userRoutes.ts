import UserController from '../../controllers/userController';
import express from 'express';

const router = express.Router();

const userController = new UserController();

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:userPk', userController.getUserByPk);
router.put('/:userPk', userController.updateUser);
router.delete('/:userPk', userController.deleteUser);

export default router;
