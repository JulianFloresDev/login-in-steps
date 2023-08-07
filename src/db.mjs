import { createConnection } from 'mysql';

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
  const query = `CREATE TABLE IF NOT EXISTS 'users_test_julianflores' (
    'id' INT NOT NULL AUTO_INCREMENT,
    'nombre' VARCHAR(255) NOT NULL,
    'segundo_nombre' VARCHAR(255),
    'apellido_paterno' VARCHAR(255) NOT NULL,
    'apellido_materno' VARCHAR(255),
    'fecha_de_nacimiento' DATE,
    'email' VARCHAR(255) NOT NULL,
    'telefono' VARCHAR(20),
    PRIMARY KEY ('id')
)`;

  connection.query(query, (error, results) => {
    if (error) throw new Error(error);
    return;
  });
});

export { connection };
