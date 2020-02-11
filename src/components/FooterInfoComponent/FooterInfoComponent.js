import React from 'react';
import './FooterInfoComponent.scss';

class FooterInfoComponent extends React.Component {
	render() {
		return <div className="footer-info-container flex-between-center">
			<p></p>
			<div className="flex-between-center">
				<p className="foot-split-block">Copyright © 2019-2019 qian666.wang. All Rights Reserved.</p>
				<p className="foot-split-block">
					<a target="_blank" href="http://www.beian.miit.gov.cn">粤ICP备19149637号</a>
				</p>
			</div>
		</div>
	}
}

export default FooterInfoComponent;