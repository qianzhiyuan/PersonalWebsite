import React from 'react';
import './LeftAsideComponent.scss'
import RankListComponent from '../RankListComponent/RankListComponent';

class LeftAsideComponent extends React.Component{
  render() {
    return (
      <div className="left-aside-container">
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

export default LeftAsideComponent;
