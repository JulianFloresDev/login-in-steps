import { connection } from '../db.mjs';
import { queries } from '../constants/ddbb.mjs';

export const getUsers = async (req, res) => {
  try {
    connection.query(
      queries['users_test_julianflores'].GET_ALL_USERS,
      (error, results, fields) => {
        if (error) throw new Error(error);
        return res.status(200).json({
          message: 'User found correctly!',
          error: false,
          data: results,
        });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message || 'Server error. Try again in a moment please.',
      error: true,
    });
  }
};

export const createNewUser = async (req, res) => {
  try {
    const { body } = req;

    /**
     * Valdiate if email is unique for each register
     */
    connection.query(
      queries['users_test_julianflores'].GET_ALL_USERS_WHERE_EMAIL_EQUALS_TO,
      body.email,
      (error, results, feilds) => {
        if (error) throw new Error(error);

        if (results.length > 0) {
          return res.status(451).json({
            message: 'Access denied!',
            error: true,
            data: null,
          });
        } else {
          /**
           * If email isn't registered, continue with the user create query
           */
          const query = connection.query(
            queries['users_test_julianflores'].CREATE_NEW_USER,
            body,
            (error, results, fields) => {
              if (error) throw new Error(error);
              return results;
            }
          );
          return res.status(200).json({
            message: 'User created!',
            error: false,
            data: query.values,
          });
        }
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message || 'Server error. Try again in a moment please.',
      error: true,
    });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({
        message: `ID is a required param.`,
        error: true,
        data: null,
      });
    }
    connection.query(
      queries['users_test_julianflores'].DELETE_ONE_USER_BY_ID,
      id,
      (error, results, fields) => {
        if (error) throw new Error(error);

        if (results.affectedRows < 1) {
          return res.status(400).json({
            message: 'The request could not be executed',
            error: true,
            data: null,
          });
        }
        return res.sendStatus(203);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message || 'Server error. Try again in a moment please.',
      error: true,
      data: null,
    });
  }
};
