export const queries = {
  users_test_julianflores: {
    GET_ALL_USERS: 'SELECT * from users_test_julianflores',
    GET_ALL_USERS_WHERE_EMAIL_EQUALS_TO:
      'SELECT * from users_test_julianflores WHERE email = ?',
    CREATE_NEW_USER: 'INSERT INTO users_test_julianflores SET ?',
    DELETE_ONE_USER_BY_ID: 'DELETE FROM users_test_julianflores WHERE id = ?',
  },
};
