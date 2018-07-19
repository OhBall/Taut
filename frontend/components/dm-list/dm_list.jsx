import React from 'react';
import DmListItem from './dm_list_item';

class DmList extends React.Component {

  render() {
    const dms = Object.values(this.props.channels).filter(
      convo =>  convo.is_dm
    );
    const dmEls = dms.map( dm => {
      const selected = dm.id === this.props.selectedId ? 'selected' : '';
      if (this.props.permissions[dm.id]){
        return <DmListItem
                  key={dm.id}
                  dm={dm}
                  selected={selected}
                  selectChannel={this.props.selectChannel} />;
      } else {
        return '';
      }
    });

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
