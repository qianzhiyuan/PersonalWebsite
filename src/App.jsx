import React from 'react';
import RouteConfig from './router'
import './assets/css/common.scss'

class App extends React.Component {
  render() {
    return (
      <>
        <RouteConfig.RouterConfig/>
      </>
    )
  }
}

export default App;
