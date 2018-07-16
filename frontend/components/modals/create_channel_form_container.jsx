import { connect } from 'react-redux';

import ChannelFormModal from './channel_form_modal';
import { createChannel } from '../../actions/modal_actions';


const mapStateToProps = state => {
  return {
    formType: 'Create',
    name: '',
    description: '',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: channel => dispatch(createChannel(channel)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelFormModal);
