import { combineReducers } from 'redux';

import session from './errors/session_errors_reducer';
import channel from './errors/channel_errors_reducer';

export default combineReducers({session, channel});
