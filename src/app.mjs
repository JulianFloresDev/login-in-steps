import express from 'express';
import cors from 'cors';
import router from './routes/index.mjs';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
  })
);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.send('Welcome rocket code team.');
});

app.use('/api', router);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'This endpoint is not allowed by the server',
    error: true,
  });
  next();
});

export default app;
