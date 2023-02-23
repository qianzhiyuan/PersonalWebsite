import React from 'react';
import CodeBlock from '../../views/Write/CodeBlock';
import ReactMarkdown from 'react-markdown';
const toc = require('remark-toc');

class MarkdownShowComponent extends React.Component{
  render() {
    return (<ReactMarkdown
      className="result Techo"
      source={this.props.source}
      skipHtml={false}
      escapeHtml={false}
      renderers={{code: CodeBlock}}
      plugins={[toc]}
    />)
  }
}

export default MarkdownShowComponent;
