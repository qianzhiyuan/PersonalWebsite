import React, {useState, useEffect} from 'react';
import {Moment} from '../../../assets/js/moment'
import './TimeComponent.scss'

function TimeComponent() {
	let moment = Moment()
	// console.log(moment);
	const [timeJson, setTimJson] = useState({
		time: moment.format('LTS'),
		weekDay: moment.format('dddd'),
		dayStr: moment.format('D.M.YYYY')
	});
	useEffect(() => {
		setTimeout(() => {
			let moment = Moment()
			setTimJson({
				time: moment.format('LTS'),
				weekDay: moment.format('dddd'),
				dayStr: moment.format('D.M.YYYY')
			})
		}, 1000)
	});

	function createHtml(timeJson) {
		// console.log(timeJson);
		let [hour, minute, second] = timeJson.time.split(':')
		let {weekDay, dayStr} = timeJson
		return `<div class="times-ctx">
      <span>${hour}</span><span class="times-colon">:</span><span>${minute}</span><span class="times-colon">:</span><span>${second}</span>
      </div>
      <div class="day-ctx">
      	<span>${weekDay}</span>
      	<span>${dayStr}</span>
			</div>	
		`
	}

	return (
		<div className="times-container" dangerouslySetInnerHTML={{__html: createHtml(timeJson)}}>
		</div>
	);
}

export default TimeComponent;
