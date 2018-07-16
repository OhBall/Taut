import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import CreateChannelForm from './create_channel_form_container';
import { clearModal } from '../../actions/modal_actions';
import { CREATE_CHANNEL_MODAL } from '../../actions/modal_actions';

const mapStateToProps = state => (
  { modal: state.ui.modal }
);

const mapDispatchToProps = dispatch => (
  { clearModal: () => dispatch(clearModal()) }
);

const ModalConductor = (props) => {

  switch (props.modal) {
    case CREATE_CHANNEL_MODAL:
      return (
        <div className='modal'>
          <button onClick={props.clearModal}>X</button>
          <CreateChannelForm />
        </div>
      );
    default:
      return null;
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);
