import React from 'react';

// const MessageListItem = ({message, user}) => {
class MessageListItem extends React.Component {

  constructor(props){
    super(props);

    const date = new Date(this.props.message.created_at);

    let hours = date.getHours();
    const ampm = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12;
    if (hours === 0) hours = 12;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Super-secret-special-day'];
    this.time = days[date.getDay()] + ', ' +
                hours + ':' + minutes + ampm;

  }




  render() {
    const { body, created_at } = this.props.message;

    let username = '';
    let img_url = '';
    if (this.props.user) {
      username = this.props.user.username;
      img_url = this.props.user.img_url;
    }

    return(
      <li >
        <div className='profile-picture'/>
        <section className='words'>
          <header className='message-header'>
            <div className ='message-info'>
              <span className='username'>{username}</span>
              <span className='timestamp'>{this.time}</span>
            </div>
            <button className='delete-message-button'>&#10005;</button>
          </header>
          <p>{body}</p>
        </section>
      </li>
    );
  }


};

export default MessageListItem;
