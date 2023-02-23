import React from 'react';
import './RightAsideComponent.scss'
import RankListComponent from '../RankListComponent/RankListComponent';
import Calendar from "../../Calendar/Calendar";

class RightAsideComponent extends React.Component{
  render() {
    return (
      <div className="right-aside-container">
        <Calendar/>
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
