import React from "react"
import {Parser, HtmlRenderer} from "commonmark"

class IntroContentBlock extends React.Component {
  render() {
    const block = this.props.content
    const reader = new Parser()
    const writer = new HtmlRenderer()
    const content = {__html: writer.render(reader.parse(block.content))}

    return (
      <div 
        dangerouslySetInnerHTML={content} 
        className='contentBlock--intro'>
      </div>
    )
  }
}

export default IntroContentBlock