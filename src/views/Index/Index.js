import React from 'react';
import './Index.scss'
import BannerComponent from '../../components/Index/BannerComponent/BannerComponent';
import TimeComponent from '../../components/Index/TimeComponent/TimeComponent';
import NavComponent from '../../components/NavComponent/NavComponent';
import LeftAsideComponent from '../../components/Index/LeftAsideComponent/LeftAsideComponent';
import MiddleSectionComponent from '../../components/Index/MiddleSectionComponent/MiddleSectionComponent';

class Index extends React.Component{
  render() {
    return (
      <div style={{background: '#FFFAE8'}}>
        <NavComponent/>
        <TimeComponent/>
        <BannerComponent/>
        <section className="section-container clearfix">
          <LeftAsideComponent/>
          <MiddleSectionComponent/>
        </section>
      </div>
    )
  }
}

export default Index;
