module.exports = {
  siteMetadata: {
    title: `Gatsby with Contentful`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9fdzhmfo9ctw`,
        accessToken: `DzcODuhAFSEdC0fvpVvqMblEJBSrkc7wwWGdAjISsZM`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
