import React from 'react';
import RouteConfig from './router'
import './assets/css/common.scss'
import Config from './assets/js/config';

class App extends React.Component {
  UNSAFE_componentWillMount() {
    this.changeMargin()
    window.onresize = () => {
      this.changeMargin()
    };
  }

  changeMargin() {
    // 获取网页可见区域宽度
    let docWidth = document.body.clientWidth;
    let docHeight = document.body.clientHeight;
    Config.fullscreenWidth = docWidth
    Config.fullscreenHeight = docHeight
  }

  render() {
    return (
      <>
        <RouteConfig.RouterConfig/>
      </>
    )
  }
}

export default App;
