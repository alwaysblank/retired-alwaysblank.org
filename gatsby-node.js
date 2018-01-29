const path = require(`path`);

exports.createPages = ({ boundActionCreators, graphql }) => {
  
  // Set up redirects
  const { createRedirect } = boundActionCreators
  let redirects = [
    { f: `/work/tool`, t: `/work/tools` },
    { f: `/work/tool/`, t: `/work/tools/` },
    { f: `/work/site`, t: `/work/sites` },
    { f: `/work/site/`, t: `/work/sites/` },
  ]
  
  redirects.forEach(({ f, t }) => {
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
    })
  })
  
  // Set up Work
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
        path: path.posix.join(`work`, node.type, node.slug),
        component: WorkTemplate,
        context: {
          slug: node.slug,
          type: node.type,
        },
      });
    });
  });


};
