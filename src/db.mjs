import { createConnection } from 'mysql';
import {
  DDBB_HOST,
  DDBB_USER,
  DDBB_PASSWORD,
  DDBB_NAME,
} from './constants/index.mjs';

export const connection = createConnection({
  host: DDBB_HOST,
  user: DDBB_USER,
  password: DDBB_PASSWORD,
  database: DDBB_NAME,
});
