import axios from 'axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../../actions';

import { setAlert } from '../../alert-action';
import { setAuthToken } from '../../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch: any) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
    });
  }
};

// Register User
export const register = ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => async (dispatch: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = await JSON.stringify({ name, email });

  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert(`User ${email} registered`, 'success'));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.map((error: { msg: string }) => {
        dispatch(setAlert(error.msg, 'error'));
      });
    }
    dispatch({
      type: REGISTER_FAILURE,
    });
  }
};

// Login User
export const login = (email: string, password: string) => async (
  dispatch: any
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = await JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert(`Welcome ${email}`, 'success'));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.map((error: { msg: string }) => {
        dispatch(setAlert(error.msg, 'error'));
      });
    }
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};

// Logout
export const logout = () => async (dispatch: any) => {
  dispatch({ type: LOGOUT });
};
