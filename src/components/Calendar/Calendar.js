import React from 'react';
import './Calendar.scss'
import {Moment} from '../../assets/js/moment';
import {mGetDate, getDateTimeDataLunar} from '../../assets/js/common';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weekArr: ['一', '二', '三', '四', '五', '六', '日'],
      monthDays: []
    }
  }

  UNSAFE_componentWillMount() {
    let [nowYear, nowMonth] = Moment().format('YYYY-MM').split('-')
    this.getNearThreeDayArr(parseInt(nowYear), parseInt(nowMonth))
    // this.getNearThreeDayArr(parseInt(nowYear), parseInt(1))
  }

  // 获取传入时间以及前后月份的数组
  getNearThreeDayArr(nowYear, nowMonth) {
    // console.log(nowYear, nowMonth);
    const prevYear = nowMonth === 1 ? (nowYear - 1) : nowYear
    const prevMonth = nowMonth === 1 ? 12 : (nowMonth - 1)
    const middleMonthNums = mGetDate(nowYear, nowMonth)
    const lastYear = nowMonth === 12 ? (nowYear + 1) : nowYear
    const lastMonth = nowMonth === 12 ? 1 : (nowMonth + 1)
    // 如果是1月份, 则前一月为上一年的12月份;如果是12月份，下一月为次年1月
    const preMonthNums = mGetDate(prevYear, prevMonth)
    // const lastMonthNums = mGetDate((nowMonth === 12 ? (nowYear + 1) : nowYear),
    //   (nowMonth === 12 ? 1 : (nowMonth + 1)))
    // console.log(preMonthNums, middleMonthNums, lastMonthNums);
    // 计算上一个月会有多少天展示
    let thisMonthFirstWeek = Moment(`${nowYear}-${nowMonth}-01`).days()
    let thisMonthLastWeek = Moment(`${nowYear}-${nowMonth}-${middleMonthNums}`).days()
    thisMonthFirstWeek = thisMonthFirstWeek === 0 ? 7 : thisMonthFirstWeek
    let finallyMonthData = []
    if (thisMonthFirstWeek !== 1) { // 这个月第一天不是周一，数据则存入数组
      const leftNum = (preMonthNums + 2) - thisMonthFirstWeek
      for(let i = leftNum; i < preMonthNums + 1; i++) {
        finallyMonthData.push({
          date: `${prevYear}-${prevMonth}-${i}`,
          dayNumber: i
        })
      }
    }
    for (let i = 1; i < middleMonthNums + 1; i++) {
      finallyMonthData.push({
        date: `${nowYear}-${nowMonth}-${i}`,
        dayNumber: i
      })
    }
    if (thisMonthLastWeek !== 0 || finallyMonthData.length < 43) { // 这个月最后一天不是周日，数据则存入数组
      const rightNum = 42 - finallyMonthData.length
      for (let i = 1; i < rightNum + 1; i++) {
        finallyMonthData.push({
          date: `${lastYear}-${lastMonth}-${i}`,
          dayNumber: i
        })
      }
    }
    this.setState({
      monthDays: finallyMonthData
    })
  }

  getLunarText(date) {
    const obj = getDateTimeDataLunar(Moment(date))
    let returnText = obj.term ? obj.term : obj.lDate
    if (obj.festival() && obj.festival()[0]) {
      returnText = obj.festival()[0].value
    }
    return returnText;
  }

  render() {
    const {weekArr, monthDays} = this.state
    return (<div className="calendar-container">
      <div className="calendar-title flex-center-center">
        {
          weekArr.map((item, idx) => {
            return <p className="calendar-title-item" key={idx}>{item}</p>
          })
        }
      </div>
      <div className="calendar-content">
        {
          monthDays.map((item, idx) => {
            return <div className="calendar-content-item" key={idx}>
              <p>{item.dayNumber}</p>
              <p className="calendar-festival-desc">{this.getLunarText(item.date)}</p>
            </div>
          })
        }
      </div>
    </div>)
  }
}

export default Calendar;
