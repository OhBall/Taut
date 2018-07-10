import { combineReducers } from 'redux';

import errors from './errors_reducer';
import entities from './entities_reducer';
import session from './session_reducer';

export default combineReducers({entities, session, errors});
