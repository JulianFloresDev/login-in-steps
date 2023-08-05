import express from 'express';
import cors from 'cors';
import router from './routes/index.mjs';

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'This endpoint is not allowed by the server',
    error: true,
  });
  next();
});

export default app;
