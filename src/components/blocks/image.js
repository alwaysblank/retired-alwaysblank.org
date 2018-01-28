import React from "react"
import Img from 'gatsby-image'
import styled from 'styled-components';

const ImageWrapper = styled.div`
  padding: 1rem;
`

const ImageCaption = styled.div`
  font-style: italic;
  font-size: 0.8em;
  opacity: 0.8;
`

class ImageContentBlock extends React.Component {
  render() {
    const data = this.props.content

    return (
      <ImageWrapper className="contentBlock--imageWrapper">
        <Img 
          resolutions={data.image.childImageSharp.resolutions} 
          className="contentBlock--image"
          alt={data.alt} />
        <ImageCaption >
          {data.caption}
        </ImageCaption>
      </ImageWrapper>
    )
  }
}

export default ImageContentBlock