import { createConnection } from 'mysql';
import fs from 'node:fs';

import {
  DDBB_HOST,
  DDBB_USER,
  DDBB_PASSWORD,
  DDBB_NAME,
} from './constants/index.mjs';

const connection = createConnection({
  host: DDBB_HOST,
  user: DDBB_USER,
  password: DDBB_PASSWORD,
  database: DDBB_NAME,
});

connection.query('USE testing_ali_fullstack', (error, results) => {
  if (error) throw new Error(error);
  const query = fs.readFileSync('db/database.sql', 'utf8');

  connection.query(query);
});

export { connection };
