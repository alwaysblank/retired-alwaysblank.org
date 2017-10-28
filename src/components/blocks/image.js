import React from "react"

class ImageContentBlock extends React.Component {
  render() {
    const block = this.props.content

    return (
      <img src={block.content} className="contentBlock--image" />
    )
  }
}

export default ImageContentBlock