import React from "react"

class CaptionContentBlock extends React.Component {
  render() {
    const data = this.props.content

    if (data != null) {
      return (
        <div className="contentBlock--caption">
          {data}
        </div>
      )
    } else {
      return null
    }
  }
}

export default CaptionContentBlock