import React from 'react';

const ChannelListItem = ({ channel, selected }) => {
  return (
    <li className={selected}>
      <span>#</span>
      <span>{channel.name}</span>
    </li>
  );
};

export default ChannelListItem;
