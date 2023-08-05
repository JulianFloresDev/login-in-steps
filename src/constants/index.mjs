import { config } from 'dotenv';
config();

export const { DDBB_HOST, DDBB_USER, DDBB_PASSWORD, DDBB_NAME } = process.env;

export const PORT = process.env.PORT || 3000;
