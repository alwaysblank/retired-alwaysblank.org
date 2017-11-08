module.exports = {
  siteMetadata: {
    title: `Always Blank`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `local`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
