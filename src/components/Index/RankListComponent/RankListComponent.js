import React from 'react';
import './RankListComponent.scss'
import {getBaiDuList} from '../../../assets/js/resource';
import {changeTimes} from '../../../assets/js/common';

class RankListComponent extends React.Component {
  state = {
    list: []
  }

  UNSAFE_componentWillMount() {
    this.getData()
  }

  getData() {
    getBaiDuList().then(res => {
      if (res.code === 200) {
        console.log(res.data);
        this.setState({
          list: res.data
        })
      }
    })
  }

  linkUrl(url) {
    console.log(url);
  }

  render() {
    let {list} = this.state

    function isRank(idx) {
      if (idx === 0) {
        return 'first-icon'
      } else if (idx === 1) {
        return 'second-icon'
      } else {
        return 'third-icon'
      }
    }

    return (
      <div className="rank-list-component">
        <p className="rank-list-title">百度热搜排行</p>
        <ul className="rank-list-content">
          {
            list.map((item, idx) => {
              if (idx > 9) return null
              return <li key={idx}>
                <p className="num-box">
                  {
                    idx > 2 ? <span className="rank-icon">{item.rank}</span> :
                      <span className={`rank-icon ${isRank(idx)}`}>{item.rank}</span>
                  }
                </p>
                <div className="right-box">
                  <a className="right-box-name"
                     href={item.topic_link} target={'_blank'}>
                    {item.name.split('search')[0]}</a>
                  <p className="right-box-hot">{changeTimes(item.times)}</p>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default RankListComponent;
