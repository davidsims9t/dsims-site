module.exports = {
  siteMetadata: {
    title: `David Sims | Full-stack Developer`,
    logo: 'DS',
    description: `The portfolio of David Sims, Full-stack Developer based out of Seattle, WA`,
    author: `@davidsims9t`,
    menuLinks: [
      {
        name: 'Work',
        link: '#work'
      },
      {
        name: 'About',
        link: '#about'
      },
      // {
      //   name: 'Articles',
      //   link: '/articles'
      // },
      {
        name: 'Contact',
        link: 'mailto:davidsims15@gmail.com'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
