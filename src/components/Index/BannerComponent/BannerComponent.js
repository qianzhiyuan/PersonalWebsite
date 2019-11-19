import React from 'react';
import './BannerComponent.scss'
import {getRandom} from '../../../assets/js/common';

class BannerComponent extends React.Component{
  UNSAFE_componentWillMount() {
  }

  render() { // 2345678910111111111
    const arr = ['SAO', 'Other']
    const addressStr = arr[getRandom(0, 1)]
    let idx = -1
    if (addressStr === 'SAO') {
      idx = getRandom(1, 40)
    } else {
      idx = getRandom(1, 13)
    }
    let img = require('../../../assets/img/banner/' + addressStr + '/' + idx + '.jpg')
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
