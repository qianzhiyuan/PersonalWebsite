import React from 'react';
import './LeftAsideComponent.scss'
import RankListComponent from '../RankListComponent/RankListComponent';

class LeftAsideComponent extends React.Component{
  render() {
    return (
      <div className="left-aside-container">
        <RankListComponent/>
      </div>
    )
  }
}

export default LeftAsideComponent;
