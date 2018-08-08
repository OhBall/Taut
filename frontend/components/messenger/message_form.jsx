import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.body = '';
    this.state.user_id = props.currentUserId;
    this.state.conversationable_id = props.selectedId;
    this.state.conversationable_type = 'Channel';

    this.update = this.update.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (newProps.selectedId !== this.state.conversationable_id){
      this.setState({conversationable_id: newProps.selectedId});
    }
  }

  update(e) {
    const value = e.target.value;
    if (value !== "\n") this.setState({ body: value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      App[this.props.selectedId].speak(this.state);
      this.setState({body: ''});
    }
  }

  render() {
    return (
      <footer>
        <form className='message-form'>
          <textarea value={this.state.body}
            onChange={this.update}
            onKeyPress={this.handleKeyPress}
            placeholder='Message'/>
        </form>
      </footer>
    );
  }
}

export default MessageForm;
