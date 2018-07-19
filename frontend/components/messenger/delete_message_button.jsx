import React from 'react';
import { connect } from 'react-redux';

import { deleteMessage } from '../../actions/message_actions';

const mapDispatchToProps = dispatch => (
  { deleteMessage: messageId => () => dispatch(deleteMessage(messageId)) }
);

const DeleteMessageButton = props => {
  const {hide, messageId } = props;
  const hiddenClass = hide ? 'hidden' : '';

  return (
     <button
       className={`delete-message-button ${hiddenClass}`}
       onClick={props.deleteMessage(messageId)}>
        &#10005;
     </button>
  );
};

export default connect(null, mapDispatchToProps)(DeleteMessageButton);
