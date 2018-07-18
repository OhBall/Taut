import { connect } from 'react-redux';

import SearchableUserList from './searchable_user_list';
import { findMatchingUsers } from '../../utils/search_util.js';

const mapStateToProps = state =>{
  return {
    users: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => {
  //// TODO: add createPermission
  return {
    findMatchingUsers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchableUserList);
