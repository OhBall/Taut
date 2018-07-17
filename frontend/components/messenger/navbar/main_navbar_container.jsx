import { connect } from 'react-redux';

import MainNavbar from './main_navbar';

const mapStateToProps = state => {
  const selectedId = state.ui.sidebar.selectedId;
  const selectedConvo = state.entities.channels[selectedId] ||
   {name: '', description: ''};
  return {
    selectedConvo,
  };
};

export default connect(mapStateToProps)(MainNavbar);
