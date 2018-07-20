import { connect } from 'react-redux';

import DmList from './dm_list';
import { createDmModal } from '../../actions/modal_actions';
import { selectChannel } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
    channels: state.entities.channels,
    permissions: state.entities.permissions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDmModal: () => dispatch(createDmModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DmList);
