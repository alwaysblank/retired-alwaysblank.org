import React from "react"
require(`prismjs`);
require(`prismjs/components/prism-php.js`);
require(`prismjs/components/prism-php-extras.js`);
require(`prismjs/components/prism-javascript.js`);
require(`prismjs/components/prism-css.js`);
require(`prismjs/components/prism-python.js`);
require(`prismjs/components/prism-json.js`);
require(`prismjs/components/prism-jsx.js`);
require(`prismjs/components/prism-markdown.js`);
require(`prismjs/components/prism-yaml.js`);
require(`prismjs/components/prism-bash.js`);
require(`prismjs/themes/prism-okaidia.css`);
import PrismCode from 'react-prism'
import {Parser, HtmlRenderer} from "commonmark"

class CodeContentBlock extends React.Component {
  render() {
    const block = this.props.content
    const reader = new Parser()
    const writer = new HtmlRenderer()
    const explain = block.explain ? {__html: writer.render(reader.parse(block.explain))} : false

    return (
      <div className={`contentBlock--code language-${block.language}`}>
        {explain &&
          <p 
            dangerouslySetInnerHTML={explain} 
            className="contentBlock--code__explain">
          </p>
        }
        <pre>
          <PrismCode>
              {block.content}
          </PrismCode>
        </pre>
      </div>
    )
  }
}

export default CodeContentBlock