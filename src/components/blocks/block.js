import React from "react"
import capitalize from "lodash.capitalize"

import TextContentBlock from "./text"

class ContentBlock extends React.Component {
  render() {
    const content = this.props.block
    const Component = `${capitalize(this.props.block.type)}ContentBlock`
    return (
      <TextContentBlock content={content} />
    )
  }
}

export default ContentBlock