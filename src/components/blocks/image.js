import React from "react"
import Img from 'gatsby-image'
import Caption from './caption'


class ImageContentBlock extends React.Component {
  render() {
    const data = this.props.content
    console.log(data)

    return (
      <div className="contentBlock--imageWrapper">
        <Img 
          resolutions={data.image.childImageSharp.resolutions} 
          className="contentBlock--image"
          alt={data.alt} />
        <Caption content={data.caption} />
      </div>
    )
  }
}

export default ImageContentBlock