import React from 'react';

class ChannelListItem extends React.Component {

  constructor(props){
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(){
    this.props.selectChannel(this.props.channel.id);
  }

  render() {
    const { channel, selected, selectChannel } = this.props;
    return (
      <li className={selected} onClick={this.handleSelection}>
        <span>#</span>
        <span>{channel.name}</span>
      </li>
    );
  }
}

export default ChannelListItem;
