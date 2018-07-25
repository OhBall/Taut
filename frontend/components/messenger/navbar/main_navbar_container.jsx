import { connect } from 'react-redux';

import MainNavbar from './main_navbar';

const mapStateToProps = state => {
  const selectedId = state.ui.sidebar.selectedId;
  const selectedConvo = state.entities.channels[selectedId] ||
   {name: '', description: ''};
  return {
    selectedConvo,
    users: state.entities.users,
    currentUserId: state.session.id,
  };
};

export default connect(mapStateToProps)(MainNavbar);
