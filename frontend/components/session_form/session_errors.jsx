import React from 'react';

const SessionErrors = props => {

  const { errors, hidden } = props;
  const errorLis = errors.map( (error) => {
    return <li>{error}</li>;
  });

  return(
    <ul className={`session-errors ${hidden}`}>
      {errorLis}
    </ul>
  );
};

export default SessionErrors;
