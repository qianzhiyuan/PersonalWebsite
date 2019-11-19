import React from 'react';
import './NavComponent.scss'
import Config from '../../assets/js/config';
import TimeComponent from "../Index/TimeComponent/TimeComponent";

class NavComponent extends React.Component {
  state = {
    theme: 'top' // top scroll
  }

  UNSAFE_componentWillMount() {
    this.setNavTheme()
    window.onscroll = () => {
      this.setNavTheme()
    }
    window.onresize = () => {
      this.setNavTheme()
    }
  }

  setNavTheme() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let type = ''
    if (scrollTop + 50 > Config.fullscreenHeight) {
      type = 'scroll'
    } else {
      type = 'top'
    }
    if (type === this.state.theme) return false
    this.setState({
      theme: type
    })
  }

  render() {
    let {theme} = this.state
    return (
      <div className={`nav-container${theme === 'scroll' ? ' middle-top' : ''}`}>
        <p className="nav-item">
          <span>Home</span>
        </p>
        <p className="nav-item">
          <span>About</span>
        </p>
        <p className="nav-item">
          <span>Test</span>
        </p>

        <div className="time-absolute">
          <TimeComponent isMin={theme === 'scroll'}/>
        </div>
      </div>
    )
  }
}

export default NavComponent;
