import express from 'express';
import {
  createNewUser,
  deleteUserById,
  getUsers,
} from '../controllers/users.mjs';
import userCreateValidation from '../validations/users.mjs';

const router = express.Router();

router
  .get('/', getUsers)
  .post('/', userCreateValidation, createNewUser)
  .delete('/:id', deleteUserById);

export default router;
