import React from 'react';
import './Calendar.scss'
import {Moment} from '../../assets/js/moment';
import {mGetDate, getDateTimeDataLunar} from '../../assets/js/common';

class Calendar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			weekArr: ['一', '二', '三', '四', '五', '六', '日'],
			monthDays: [],
      today: Moment().format('YYYY-MM-DD')
		}
	}

	UNSAFE_componentWillMount() {
		let [nowYear, nowMonth, nowDate] = Moment().format('YYYY-MM-DD').split('-')
		this.getNearThreeDayArr(parseInt(nowYear), parseInt(nowMonth), parseInt(nowDate))
		// this.getNearThreeDayArr(parseInt(nowYear), parseInt(1))
	}

	// 获取传入时间以及前后月份的数组
	getNearThreeDayArr(nowYear, nowMonth, nowDate) {
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
			for (let i = leftNum; i < preMonthNums + 1; i++) {
				finallyMonthData.push({
					date: `${prevYear}-${prevMonth}-${i}`,
					dayNumber: i,
					notNow: true,
					weekDay: Moment(`${prevYear}-${prevMonth}-${i}`).day()
				})
			}
		}
		for (let i = 1; i < middleMonthNums + 1; i++) {
			finallyMonthData.push({
				date: `${nowYear}-${nowMonth}-${i}`,
				dayNumber: i,
				weekDay: Moment(`${nowYear}-${nowMonth}-${i}`).day()
			})
		}
		if (thisMonthLastWeek !== 0 || finallyMonthData.length < 43) { // 这个月最后一天不是周日，数据则存入数组
			const rightNum = 42 - finallyMonthData.length
			for (let i = 1; i < rightNum + 1; i++) {
				finallyMonthData.push({
					date: `${lastYear}-${lastMonth}-${i}`,
					dayNumber: i,
					notNow: true,
					weekDay: Moment(`${lastYear}-${lastMonth}-${i}`).day()
				})
			}
		}
		this.setState({
			nowYear,
			nowMonth,
			nowDate,
			monthDays: finallyMonthData
		})
	}

	changeMonth(type) {
    let {nowYear, nowMonth, today} = this.state
	  if (type === 'prev') {
      nowYear = nowMonth === 1 ? nowYear - 1 : nowYear
      nowMonth = nowMonth === 1 ? 12 : nowMonth - 1
      this.getNearThreeDayArr(parseInt(nowYear), parseInt(nowMonth))
    } else if (type === 'next') {
      nowYear = nowMonth === 12 ? nowYear + 1 : nowYear
      nowMonth = nowMonth === 12 ? 1 : nowMonth + 1
      this.getNearThreeDayArr(parseInt(nowYear), parseInt(nowMonth))
    } else if (type === 'today') {
      let [nowYear, nowMonth, nowDate] = today.split('-')
      this.getNearThreeDayArr(parseInt(nowYear), parseInt(nowMonth), parseInt(nowDate))
    }
  }

	render() {
		const {weekArr, monthDays, nowYear, nowMonth, today} = this.state
		const leftIcon = require('../../assets/img/index/left-icon.png')
		const rightIcon = require('../../assets/img/index/right-icon.png')

    function getLunarText(date) {
      const obj = getDateTimeDataLunar(Moment(date))
      let style = {}
      let returnText = obj.lDate
      if (obj.term) {
        returnText = obj.term
        style.color = '#e02d2d'
      }
      if (obj.festival() && obj.festival()[0]) {
        returnText = obj.festival()[0].value
        style.color = '#e02d2d'
      }
      return {
      	dom: <p className="calendar-festival-desc" style={style}>
		      {returnText}
	      </p>,
	      text: returnText
      };
    }

		return (<div>
			<div className="calendar-container">
				<div className="calendar-operate flex-between-center">
					{/*<span>当前时间为： {nowYear}年{nowMonth}月{nowDate}日</span>*/}
					<p className="operate-btn">
						<span>{nowYear}年</span>
					</p>
					<p className="operate-btn flex-center-center">
						<img src={leftIcon} onClick={() => this.changeMonth('prev')} alt=""/>
						<span style={{ display: 'block', width: '50px', textAlign: 'center' }}>{nowMonth}月</span>
						<img src={rightIcon} onClick={() => this.changeMonth('next')} alt=""/>
					</p>
					<p className="operate-btn" onClick={() => this.changeMonth('today')}>
						<span>返回今天</span>
					</p>
				</div>
				<div className="calendar-title flex-center-center">
					{
						weekArr.map((item, idx) => {
							return <p className={`calendar-title-item`}
							          key={idx}>{item}</p>
						})
					}
				</div>
				<div className="calendar-content">
					{
						monthDays.map((item, idx) => {
							const isWeekDay = item.weekDay === 6 || item.weekDay === 0
							const {dom, text} = getLunarText(item.date)
							return <div className={`calendar-content-item 
							                      ${item.notNow ? 'calendar-gray' : ''} 
							                      ${today === item.date ? 'calendar-now' : ''}
                                    ${isWeekDay ? 'calendar-week-day' : ''}`}
							            title={text}
                          key={idx}>
								<p>{item.dayNumber}</p>
                {dom}
							</div>
						})
					}
				</div>
			</div>
		</div>)
	}
}

export default Calendar;
