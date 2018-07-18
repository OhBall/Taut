import { combineReducers } from 'redux';

import users from './entities/users_reducer';
import channels from './entities/channels_reducer';
import messages from './entities/messages_reducer';
import permissions from './entities/permissions_reducer';


export default combineReducers({users, channels, messages, permissions});
