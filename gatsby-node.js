const path = require(`path`);

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const SiteTemplate = path.resolve(`src/templates/site.js`);

  return graphql(`
    {
      allSitesYaml {
        edges {
          node {
            path
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allSitesYaml.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: SiteTemplate,
        context: {},
      });
    });
  });
};
