import React from 'react';

const SessionErrors = props => {

  const { errors, hidden } = props;
  const errorLis = errors.map( (error, idx) => {
    return <li key={idx}>{error}</li>;
  });

  return(
    <div className={`session-errors-container ${hidden}`}>
      <i>&#9888;</i>
      <ul className={'session-errors'}>
        {errorLis}
      </ul>
    </div>
  );
};

export default SessionErrors;
