import React from 'react';

const MessageListItem = ({message, user}) => {

  const { body, created_at } = message;
  const {username, img_url} = user;

  const date = new Date(created_at);
  let hours = date.getHours();
  const ampm = hours < 12 ? 'AM' : 'PM';
  hours = hours % 12;
  if (hours === 0) hours = 12;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Super-secret-special-day'];
  const time = days[date.getDay()] + ', ' +
                hours + ':' + date.getMinutes() + ampm;

  return(
    <li>
      <img src={img_url}/>
      <span className='username'>{username}</span>
      <span className='timestamp'>{time}</span>
      <p>{body}</p>
    </li>
  );

};

export default MessageListItem;
