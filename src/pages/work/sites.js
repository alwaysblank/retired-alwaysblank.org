import React from "react";
import Link from "gatsby-link";

const path = require(`path`);

export default function Index({ data }) {
  const { edges: work } = data.allWorkYaml;
  return (
    <div className="blog-work">
      {work
        .filter(project => project.node.name.length > 0)
        .map(({ node: project }) => {
          return (
            <div className="blog-project-preview" key={project.id}>
              <h1>
                <Link to={path.join(`/work`, project.type, project.slug)}>{project.name}</Link>
              </h1>
              <p>{project.description}</p>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query SitesIndexQuery {
    allWorkYaml(filter: {type: {eq: "site"}}) {
      edges {
        node {
          type
          slug
          name
          description
          technology
        }
      }
    }
  }
`;