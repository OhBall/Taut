import React from 'react';
import DmListItem from './dm_list_item_container';

class DmList extends React.Component {

  createDmEls(convos){
    const dms = Object.values(convos).filter( convo =>  convo.is_dm );
    const dmEls = dms.map( dm => <DmListItem key={dm.id} dm={dm} /> );
    return dmEls;
  }

  render() {
    const { channels, createDmModal } = this.props;
    const dmEls = this.createDmEls(channels);

    return (
      <ul className='dm-list'>
        <header onClick={createDmModal}>
          Direct Messages
          <span>&#x2295;</span>
        </header>
        {dmEls}
      </ul>
    );
  }

}

export default DmList;
