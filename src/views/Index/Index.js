import React from 'react';
import './Index.scss'
import BannerComponent from '../../components/Index/BannerComponent/BannerComponent';
import TimeComponent from '../../components/Index/TimeComponent/TimeComponent';

class Index extends React.Component{
  render() {
    return (
      <div>
        <TimeComponent/>
        <BannerComponent/>
      </div>
    )
  }
}

export default Index;
