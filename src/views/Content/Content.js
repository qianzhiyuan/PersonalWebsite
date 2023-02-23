import React from 'react';
import BannerComponent from '../../components/Index/BannerComponent/BannerComponent';
import NavComponent from '../../components/NavComponent/NavComponent';
import SectionComponent from '../../components/SectionComponent/SectionComponent';
import MarkdownShowComponent from '../../components/MarkdownShowComponent/MarkdownShowComponent';

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

class Content extends React.Component {
  render() {
    return (
      <div style={{background: '#FFFAE8'}}>
        <NavComponent/>
        <BannerComponent/>
        <SectionComponent>
          <MarkdownShowComponent
            source={initialSource}
          />
        </SectionComponent>
      </div>
    )
  }
}

export default Content;
