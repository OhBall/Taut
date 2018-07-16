import React from 'react';

const ChannelListItem = ({ channel }) => {
  return (
    <li>
      <span>#</span>
      <span>{channel.name}</span>
    </li>
  );
};

export default ChannelListItem;
