import React from 'react';

const MessageListItem = ({message, user}) => {

  const { body, created_at } = message;

  let username = '';
  let img_url = '';
  if (user) {
    username = user.username;
    img_url = user.img_url;
  }

  const date = new Date(created_at);

  let hours = date.getHours();
  const ampm = hours < 12 ? 'AM' : 'PM';
  hours = hours % 12;
  if (hours === 0) hours = 12;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Super-secret-special-day'];
  const time = days[date.getDay()] + ', ' +
                hours + ':' + minutes + ampm;

  return(
    <li>
      <div className='profilepicture'/>
      <section className='words'>
        <header className='message-info'>
          <div className='username'>{username}</div>
          <div className='timestamp'>{time}</div>
        </header>
        <p>{body}</p>
      </section>
    </li>
  );

};

export default MessageListItem;
