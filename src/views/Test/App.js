import React from 'react';
import logo from '../../assets/img/logo.svg';
import {
  Switch
} from "react-router-dom";
import RouteConfig from '../../router/index'
import './App.css';

const CodePreview = ({props}) => {
  if (props.routes) {
    return (
      <Switch>
        {
          props.routes.map((route, i) => {
            return <RouteConfig.RouteWithSubRoutes key={i} {...route} />
          })
        }
      </Switch>
    )
  } else {
    return null
  }

}

const App = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <div>
      <hr/>
      <CodePreview props={props}/>
    </div>
  </div>
)

export default App;
