import React from "react"

import TextContentBlock from "./text"
import CodeContentBlock from "./code"
import IntroContentBlock from "./intro"
import ImageContentBlock from "./image"
import ListContentBlock from "./list"

const block = {
  text: TextContentBlock,
  code: CodeContentBlock,
  intro: IntroContentBlock,
  image: ImageContentBlock,
  list: ListContentBlock,
}

class ContentBlock extends React.Component {

  render() {
    const content = this.props.block
    const key = this.props.id
    const Block = block[this.props.block.type]
    
    return (
      <Block id={key} content={content} />
    )
  }
}

export default ContentBlock