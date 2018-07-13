import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.body = '';
    //// TODO: set this.state.conversationable_info from props
    this.update = this.update.bind(this);
  }

  update(e) {

    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: grab room from App[room${}]
  }

  render() {
    return (
      <footer>
        <form className='message-form' onSubmit={this.handleSubmit}>
          <textarea value={this.state.body} onChange={this.update}/>
        </form>
      </footer>
    );
  }
}

export default MessageForm;
