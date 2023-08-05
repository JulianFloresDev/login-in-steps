import { config } from 'dotenv';
config();

import app from './app.mjs';
import { PORT } from './constants/index.mjs';

app.listen(PORT, () => {
  console.log(`Server ready on PORT ${PORT}`);
});
