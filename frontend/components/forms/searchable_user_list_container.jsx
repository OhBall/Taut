import { connect } from 'react-redux';

import SearchableUserList from './searchable_user_list';
import { selectUser, deselectUser } from '../../actions/ui_actions';

const mapStateToProps = state =>{
  return {
    users: state.entities.users,
    selectedUsers: state.ui.selectedUsers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectUser: userId => dispatch(selectUser(userId)),
    deselectUser: userId => dispatch(deselectUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchableUserList);
