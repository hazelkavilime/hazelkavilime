const remarkImagesPlugin = (module.exports = {
  siteMetadata: {
    title: `Gülben Şaş`,
    menuLinks: [
      {
        name: "ABOUT",
        link: "/",
      },
      {
        name: "PORTFOLIO",
        link: "/portfolio",
      },
      {
        name: "CONTACT",
        link: "/contact",
      },
    ],
    description: `Gülben Şaş`,
    author: `Eralp Karaduman <eralp@eralpkaraduman.com>`,
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
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 100,
              backgroundColor: "none",
              linkImagesToOriginal: false,
              sizeByPixelDensity: true,
              backgroundColor: "none",
              loading: "eager",
              wrapperStyle:
                "margin-left: 0!important; margin-right: 0!important;",
            },
          },
        ],
      },
    },
  ],
})
