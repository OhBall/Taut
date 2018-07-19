import React from 'react';
import DeleteMessageButton from './delete_message_button';
// const MessageListItem = ({message, user}) => {
class MessageListItem extends React.Component {

  constructor(props){
    super(props);
    this.time = this.calculateDate(this.props.message.created_at);
    this.state = {hide: true};
    this.showDeleteButton = this.showDeleteButton.bind(this);
    this.hideDeleteButton = this.hideDeleteButton.bind(this);
  }

  calculateDate(created_at){
    const date = new Date(created_at);

    let hours = date.getHours();
    const ampm = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12;
    if (hours === 0) hours = 12;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Super-secret-special-day'];
    return days[date.getDay()] + ', ' + hours + ':' + minutes + ampm;

  }

  showDeleteButton(){
    if (this.props.currentUserId === this.props.message.user_id){
      this.setState({hide: false});
    }
  }

  hideDeleteButton(){
    this.setState({hide: true});
  }

  render() {
    const { body, created_at, id } = this.props.message;

    let username = '';
    let img_url = '';
    if (this.props.user) {
      username = this.props.user.username;
      img_url = this.props.user.img_url;
    }

    return(
      <li onMouseOver={this.showDeleteButton}
          onMouseOut={this.hideDeleteButton}>
        <div className='profile-picture'/>
        <section className='words'>
          <header className='message-header'>
            <div className ='message-info'>
              <span className='username'>{username}</span>
              <span className='timestamp'>{this.time}</span>
            </div>
            <DeleteMessageButton hide={this.state.hide} messageId={id}/>
          </header>
          <p>{body}</p>
        </section>
      </li>
    );
  }

}

export default MessageListItem;
