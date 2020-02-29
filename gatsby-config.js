module.exports = {
  siteMetadata: {
    title: `Umiya Interiors`,
	author: {
      name: `Deven Goratela`,
      summary: `who lives and works in Gandhinagar building useful things.`,
    },
    description: `Umiya Interiors, Gandhinagar Gujarat famous furniture showroom for office and household`,
    siteUrl: `https://umiyainteriors.netlify.com/`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Umiya Interiors`,
        short_name: `UmiyaInteriors`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
