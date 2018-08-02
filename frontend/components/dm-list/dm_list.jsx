import React from 'react';
import DmListItem from './dm_list_item_container';

class DmList extends React.Component {

  render() {
    const dms = Object.values(this.props.channels).filter(
      convo =>  convo.is_dm
    );
    const dmEls = dms.map(
      dm => { return <DmListItem key={dm.id} dm={dm} />; }
    );

    return (
      <ul className='dm-list'>
        <header onClick={this.props.createDmModal}>
          Direct Messages
          <span>&#x2295;</span>
        </header>
        {dmEls}
      </ul>
    );
  }

}

export default DmList;
