import React from 'react';
import './SectionComponent.scss'
import LeftAsideComponent from "./LeftAsideComponent/LeftAsideComponent";
import RightAsideComponent from "./RightAsideComponent/RightAsideComponent";

class SectionComponent extends React.Component {
	render() {
		return (<section className="section-container clearfix">
			<LeftAsideComponent/>
			<RightAsideComponent/>
			<div className="middle-section-container">
				{this.props.children}
			</div>
		</section>)
	}
}

export default SectionComponent;
