import React from "react"
import ContentBlock from "../components/blocks/block"
import Img from 'gatsby-image'

class SiteTemplate extends React.Component {
  render() {

    const site = this.props.data.sitesYaml

    return (
      <div>
        <h1>{site.name}</h1>
        {site.body.map(function(block, index) {
            return <ContentBlock key={index} block={block} />
          }) }
      </div>
    )
  }
}

export default SiteTemplate

export const pageQuery = graphql`
  query SiteByPath($path: String!) {
    sitesYaml(path: { eq: $path }) {
      path
      name
      prefix
      short_name
      job_description
      technology
      client {
        name
        url
      }
      body {
        type
        content
        # list-type specific
        items
        # image-type specific
        caption
        alt
        image {
          childImageSharp {
            resolutions(width: 800) {
              ...GatsbyImageSharpResolutions_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`