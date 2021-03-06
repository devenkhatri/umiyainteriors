module.exports = {
  siteMetadata: {
    title: `Umiya Interior`,
    author: {
      name: `Deven Goratela`,
      summary: `who lives and works in Gandhinagar building useful things.`,
    },
    description: `Umiya Interior, Famous Customised Furniture Showroom for Interior Solution for Office and Home use, Gandhinagar, Gujarat`,
    siteUrl: `https://www.umiyainterior.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9fdzhmfo9ctw`,
        accessToken: `DzcODuhAFSEdC0fvpVvqMblEJBSrkc7wwWGdAjISsZM`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Umiya Interior`,
        short_name: `UmiyaInterior`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#E95420`,
        display: `minimal-ui`,
        icon: `static/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-159953130-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}
