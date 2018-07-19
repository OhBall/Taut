import { connect } from 'react-redux';

import DmList from './dm_list';
import { createDmModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    channels: state.entities.channels,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDmModal: () => dispatch(createDmModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DmList);
