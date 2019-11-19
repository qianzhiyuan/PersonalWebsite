import React from 'react';
import './MiddleSectionComponent.scss';

class MiddleSectionComponent extends React.Component {
  render() {
    let hearderIcon = require('../../../assets/img/author/head-icon.jpg')
    let commentIcon = require('../../../assets/img/icon/comment-icon.png')
    let eyeIcon = require('../../../assets/img/icon/eyes-icon.png')
    let thumbIcon = require('../../../assets/img/icon/thumbs-icon.png')
    return <>
      <ul className="scroll-section-list">
        {
          [1, 2, 3, 4, 5].map((item, idx) => {
            return <li key={idx}>
              <div className="top-info">
                <img src={hearderIcon} alt="author"/>
                <p className="padding-left-60">
                  <span>@潜</span><span> · </span>
                  <span>2019-11-12 22:49:50</span>
                </p>
                <div className='list-title padding-left-60'>
                  解决live2d看板娘卡顿
                </div>
              </div>
              <div className="scroll-list-content">
                <p>
                  前言：现在很多人搭建web环境选择了一键脚本或可视化管理面板，因此我认为在使用一键脚本之前，一定要自己搭建一次，
                  生产环境的话，炸了都不知道怎么快速解决可就太难受了，另外就是安全性问题，这个不多谈，总之能不用就不用吧 刚好最近手边 ...
                </p>
                <p>
                  <img className="content-img" src={require('../../../assets/img/test/test.webp')} alt=""/>
                </p>
                <div className="scroll-list-footer">
                  <p className="system-block">
                    <img className="list-icon" src={commentIcon} alt="commentIcon"/>
                    <span>200</span>
                  </p>
                  <p className="system-block">
                    <img className="list-icon" src={eyeIcon} alt="eyeIcon"/>
                    <span>200</span>
                  </p>
                  <p className="system-block">
                    <img className="list-icon" src={thumbIcon} alt="thumbIcon"/>
                    <span>200</span>
                  </p>
                </div>
              </div>
            </li>
          })
        }
      </ul>
    </>
  }
}

export default MiddleSectionComponent;
