import React from 'react';
import './BannerComponent.scss'
import {getRandom, quotationsList} from '../../../assets/js/common';

class BannerComponent extends React.Component {
	state = {
		quotationsPosition: [{
			left: '2%',
			top: '12%'
		}, {
			top: '12%',
			right: '2%'
		}, {
			left: '2%',
			bottom: '12%'
		}, {
			right: '2%',
			bottom: '12%'
		}, {
			left: '50%',
			top: '50%',
			transform: "translate3d(-50%, -50%, 0)",
			'OTransform': 'translate3d(-50%, -50%, 0)',
			'msTransform': 'translate3d(-50%, -50%, 0)',
			'MozTransform': 'translate3d(-50%, -50%, 0)',
			'WebkitTransform': 'translate3d(-50%, -50%, 0)'
		}],
		quotations: quotationsList()[getRandom(0, quotationsList().length - 1)]
	}

	UNSAFE_componentWillMount() {
		this.refreshLock = true
		this.refreshQuotations()
	}

	componentWillUnmount() {
		this.refreshLock = false
	}

	// 刷新诗词
	refreshQuotations = () => {
		setTimeout(() => {
			const quotations = quotationsList()[getRandom(0, quotationsList().length - 1)]
			this.refreshLock && this.setState({
				quotations: Object.assign(this.state.quotations, quotations)
			}, () => {
				this.refreshQuotations()
			})
		}, 30000)
	}

	render() {
		const {quotationsPosition, quotations} = this.state
		const arr = ['SAO', 'Other']
		const addressStr = arr[getRandom(0, 1)]
		let idx = -1
		if (addressStr === 'SAO') {
			idx = getRandom(1, 41)
		} else {
			idx = getRandom(1, 13)
		}
		let img = require('../../../assets/img/banner/' + addressStr + '/' + idx + '.jpg')
		const style = {
			backgroundImage: 'url(' + img + ')',
			backgroundSize: 'cover',
			backgroundPosition: '50% 50%'
		}
		return (
			<section className="index-banner-component" style={style}>
				<div className="quotations-container" style={quotationsPosition[getRandom(0, 4)]}>
					<p>{quotations.text}<span className="author-text">---{quotations.name}</span></p>
				</div>
			</section>
		)
	}
}

export default BannerComponent;
