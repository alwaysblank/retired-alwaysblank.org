import React from "react"
import ContentBlock from "../components/blocks/block"

class SiteTemplate extends React.Component {
  render() {
    const site = this.props.data.sitesYaml

    return (
      <div>
        <h1>{site.name}</h1>
        <div>
          <p>{site.job_description}</p>
        </div>
        {site.body.map(function(block, index) {
          // if (block.type === `text`) {
            return <ContentBlock key={index} block={block} />
          // }
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
    short_name
    job_description
    technology
    client {
      name
      url
    }
    image
    body {
      type
      content
      # list-type specific
      items
      # image-type specific
      caption
      alt
    }
  }
}
`