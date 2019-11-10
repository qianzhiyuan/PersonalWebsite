import React from 'react';
import './Index.scss'
import BannerComponent from '../../components/Index/BannerComponent/BannerComponent';
import TimeComponent from '../../components/Index/TimeComponent/TimeComponent';
import NavComponent from '../../components/NavComponent/NavComponent';
import LeftAsideComponent from '../../components/Index/LeftAsideComponent/LeftAsideComponent';

class Index extends React.Component{
  render() {
    return (
      <div style={{background: '#FFFAE8'}}>
        <NavComponent/>
        <TimeComponent/>
        <BannerComponent/>
        <section className="section-container">
          <LeftAsideComponent/>
        </section>
      </div>
    )
  }
}

export default Index;
