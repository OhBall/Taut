import React from 'react';

class MainNavbar extends React.Component{

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(){
    this.props.deleteChannel(this.props.selectedConvo.id);
  }

  handleEdit(){
    this.props.editChannelModal();
  }

  render(){
    const { selectedConvo, users, currentUserId } = this.props;

    let h1 = '';
    let h2 = '';
    if (selectedConvo.is_dm) {
      const usernames = [];
      selectedConvo.user_ids.forEach( userId => {
        if (userId !== currentUserId){
          usernames.push(users[userId].username);
        }
      });
      h1 = usernames.join(', ');
    } else {
      h1 = `# ${selectedConvo.name}`;
      h2 = selectedConvo.description;
    }

    const hidden = selectedConvo.is_dm ? 'hidden' : '';

    return (
      <header className='main-navbar'>
        <div className='channel-info'>
          <h1>{h1}</h1>
          <h2>{h2}</h2>
        </div>
        <div className={`options ${hidden}`}>
          <button onClick={this.handleEdit}>Edit Channel</button>
          <button onClick={this.handleDelete}>Delete Channel</button>
        </div>
      </header>
    );
  }

}

export default MainNavbar;
