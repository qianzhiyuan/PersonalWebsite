import React from 'react';
import 'highlight.js/styles/monokai-sublime.css';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import './Write.scss'
import './css/Techo.scss'
import MarkdownShowComponent from '../../components/MarkdownShowComponent/MarkdownShowComponent';
import {getSessionCache, setSessionCache} from "../../assets/js/common";
const Editor = require('./editor')

const initialSource = `
# Live demo
Changes are automatically rendered as you type.
## Table of Contents
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?
|  Feature  | Support |
| :-------: | :-----: |
|  tables   |    ✔    |
| alignment |    ✔    |
|   wewt    |    ✔    |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [Espen Hovlandsdal](https://espen.codes/)
`

class Write extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			markdownSrc: (getSessionCache('cacheMarkDownCtx') && JSON.parse(getSessionCache('cacheMarkDownCtx'))) || initialSource,
			htmlMode: 'raw'
		}
		this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
		this.submitContent = this.submitContent.bind(this)
	}

	handleMarkdownChange(evt) {
		const value = evt.target.value
		setSessionCache('cacheMarkDownCtx', value, true)
		this.setState({markdownSrc: value})
	}

	// 提交内容
	submitContent() {
		const content = this.state.markdownSrc
		console.log(content.trim());
	}

	render() {
		return (
			<div className="demo">
				{/* 左边文档页面展示区域 */}
				<div className="result-pane">
					<MarkdownShowComponent
						source={this.state.markdownSrc}
					/>
				</div>

				{/* 右侧编辑器 */}
				<div className="editor-pane">
					<Editor value={this.state.markdownSrc} onChange={this.handleMarkdownChange} />
				</div>

				{/* 底部操作按钮区域 */}
				<div className="operate-write-btn-area flex-center-center">
					<p className="write-btn-div flex-center-center" onClick={this.submitContent}>提交</p>
				</div>
			</div>
		)
	}
}

export default Write;
