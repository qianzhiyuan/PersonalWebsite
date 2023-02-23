import React from 'react';
import './Index.scss'
import BannerComponent from '../../components/Index/BannerComponent/BannerComponent';
import NavComponent from '../../components/NavComponent/NavComponent';
import MiddleSectionComponent from '../../components/Index/MiddleSectionComponent/MiddleSectionComponent';
import SectionComponent from '../../components/SectionComponent/SectionComponent';
import FooterInfoComponent from "../../components/FooterInfoComponent/FooterInfoComponent";

class Index extends React.Component{
  render() {
    return (
      <div style={{background: '#FFFAE8'}}>
        <NavComponent/>
        <BannerComponent/>
        <SectionComponent>
          <MiddleSectionComponent/>
        </SectionComponent>
        <FooterInfoComponent/>
      </div>
    )
  }
}

export default Index;
