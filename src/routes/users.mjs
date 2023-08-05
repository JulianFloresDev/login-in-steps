import express from 'express';
import {
  createNewUser,
  deleteUserById,
  getUsers,
} from '../controllers/users.mjs';

const router = express.Router();

router
  .get('/', getUsers)
  .post('/', createNewUser)
  .delete('/:id', deleteUserById);

export default router;
