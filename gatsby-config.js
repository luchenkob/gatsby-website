// const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const path = require("path");
// resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Meliorism`,
    description: `Meliorism`,
    author: `@knjo`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `600`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `600`, `700`],
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-tailwind`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: fullConfig.theme.colors.white,
    //     theme_color: fullConfig.theme.colors.purple,
    //     display: `minimal-ui`,
    //     icon: `src/images/tailwind-icon.png`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};