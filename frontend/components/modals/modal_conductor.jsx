import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import CreateChannelForm from './create_channel_form_container';
import DmFormModal from './dm_form_modal.jsx';

import { clearModal } from '../../actions/modal_actions';
import { CREATE_CHANNEL_MODAL,
         CREATE_DM_MODAL } from '../../actions/modal_actions';

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
          <button onClick={props.clearModal}>&#10005;</button>
          <CreateChannelForm />
        </div>
      );
    case CREATE_DM_MODAL:
      return (
        <div className='modal'>
          <button onClick={props.clearModal}>&#10005;</button>
          <DmFormModal />
        </div>
      );
    default:
      return null;
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);
