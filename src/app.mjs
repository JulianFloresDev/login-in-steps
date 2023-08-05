import express from 'express';
import cors from 'cors';
import router from './routes/index.mjs';

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => {
  return res.send('Welcome rocket code team.');
});
app.use('/api', router);

export default app;
