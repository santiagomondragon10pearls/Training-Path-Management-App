import { combineReducers } from 'redux';

import alert from './components/Alert/reducer';
import auth from './containers/Auth/reducer';

export default combineReducers({ alert, auth });
