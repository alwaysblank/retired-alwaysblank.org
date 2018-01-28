const path = require(`path`);

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const WorkTemplate = path.resolve(`src/templates/work.js`);

  return graphql(`
    {
      allWorkYaml {
        edges {
          node {
            type
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allWorkYaml.edges.forEach(({ node }) => {
      createPage({
        path: path.join(`work`, node.type, node.slug),
        component: WorkTemplate,
        context: {
          slug: node.slug,
          type: node.type,
        },
      });
    });
  });
};
