import express from 'express';
import usersRouter from './users.mjs';

const router = express.Router();

router.use('/', (req, res) => {
  return res.send('Welcome rocket code team.');
});
router.use('/api/users', usersRouter);

export default router;
