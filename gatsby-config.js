module.exports = {
  siteMetadata: {
    title: `Hamilton Marine Finance`,
    description: ``,
    author: ``,
    siteUrl: `https://www.hamiltonmarinefinance.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            "Content-Security-Policy: frame-ancestors 'none'",
            'Service-Worker-Allowed: /',
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
          ],
        },
        mergeSecurityHeaders: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hamilton-marine-finance`,
        short_name: `hmf`,
        start_url: `/`,
        background_color: `#1F2F97`,
        theme_color: `#1F2F97`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir
        aliases: {
          Components: './components', // <- will become ./src/components
        },
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: `cac560d23ef2ba05e6c35818457ba7`,

        // The project environment to read from. Defaults to the primary environment:
        environment: `master`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: true,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
