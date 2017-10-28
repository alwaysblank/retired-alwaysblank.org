import React from "react"

class SiteTemplate extends React.Component {
  render() {
    const site = this.props.data.sitesYaml

    return (
      <div>
        <h1>{site.name}</h1>
        <div>
          <p>{site.job_description}</p>
        </div>
        {site.body.map(function(block) {
          return <div className={block.type}>
              {block.content}
            </div>
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