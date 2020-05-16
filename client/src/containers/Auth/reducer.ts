import { AuthType } from 'CustomTypes';

import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../../actions';

const initialState: AuthType = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: true,
  user: null,
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case REGISTER_FAILURE:
    case AUTH_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload,
      };
    default:
      return state;
  }
}
