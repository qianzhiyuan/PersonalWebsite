import React from 'react';
import './RightAsideComponent.scss'
import RankListComponent from '../RankListComponent/RankListComponent';

class RightAsideComponent extends React.Component{
  render() {
    return (
      <div className="right-aside-container">
        <div className="left-aside-list">
          <RankListComponent/>
        </div>
        <div className="left-aside-list">
          <RankListComponent/>
        </div>
        <div className="left-aside-list">
          <RankListComponent/>
        </div>
      </div>
    )
  }
}

export default RightAsideComponent;
