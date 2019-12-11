import React from 'react';
import './Index.scss'
import BannerComponent from '../../components/Index/BannerComponent/BannerComponent';
import NavComponent from '../../components/NavComponent/NavComponent';
import MiddleSectionComponent from '../../components/Index/MiddleSectionComponent/MiddleSectionComponent';
import SectionComponent from '../../components/SectionComponent/SectionComponent';
import Calendar from '../../components/Calendar/Calendar';

class Index extends React.Component{
  render() {
    return (
      <div style={{background: '#FFFAE8'}}>
        <NavComponent/>
        <BannerComponent/>
        <SectionComponent>
          <MiddleSectionComponent/>
          <Calendar/>
        </SectionComponent>
      </div>
    )
  }
}

export default Index;
