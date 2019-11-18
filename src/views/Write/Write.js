import React from 'react';
import 'highlight.js/styles/monokai-sublime.css';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import './Write.scss'
import './css/Techo.scss'
import CodeBlock from './CodeBlock'
import ReactMarkdown from 'react-markdown'
const toc = require('remark-toc')
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

		this.handleControlsChange = this.handleControlsChange.bind(this)
		this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
		this.state = {
			markdownSrc: initialSource,
			htmlMode: 'raw'
		}
	}

	handleMarkdownChange(evt) {
		this.setState({markdownSrc: evt.target.value})
	}

	handleControlsChange(mode) {
		this.setState({htmlMode: mode})
	}

	render() {
		return (
			<div className="demo">
				<div className="editor-pane">
					<Editor value={this.state.markdownSrc} onChange={this.handleMarkdownChange} />
				</div>

				<div className="result-pane">
					<ReactMarkdown
						className="result Techo"
						source={this.state.markdownSrc}
						skipHtml={false}
						escapeHtml={false}
						renderers={{code: CodeBlock}}
						plugins={[toc]}
					/>
				</div>
			</div>
		)
	}
}

export default Write;
