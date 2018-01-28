import React from "react"
import ContentBlock from "../components/blocks/block"
import Img from 'gatsby-image'

class WorkTemplate extends React.Component {
  render() {

    const work = this.props.data.workYaml

    return (
      <div>
        <h1>{work.name}</h1>
        {work.body.map(function(block, index) {
            return <ContentBlock key={index} block={block} />
          }) }
      </div>
    )
  }
}

export default WorkTemplate

export const pageQuery = graphql`
  query WorkBySlug($slug: String!, $type: String!) {
    workYaml(slug: { eq: $slug }, type: { eq: $type }) {
      name
      type
      slug
      short_name
      description
      technology
      client {
        name
        url
      }
      body {
        type
        content
        # code-type specific
        language
        explain
        # list-type specific
        items
        # image-type specific
        caption
        alt
        image {
          childImageSharp {
            resolutions(width: 600, height: 420) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`