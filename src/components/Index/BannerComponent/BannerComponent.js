import React from 'react';
import './BannerComponent.scss'
import {getRandom} from '../../../assets/js/common';

class BannerComponent extends React.Component{
  UNSAFE_componentWillMount() {
  }

  render() { // 2345678910111111111
    let idx = getRandom(1, 13)
    let img = require('../../../assets/img/banner/' + idx + '.jpg')
    let style = {
      backgroundImage: 'url('+img+')',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%'
    }
    return (
      <section className="index-banner-component" style={style}>
      </section>
    )
  }
}

export default BannerComponent;
