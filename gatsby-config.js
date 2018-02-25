module.exports = {
  siteMetadata: {
    title: 'Giannis Dallas Development',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
            'gatsby-plugin-sass',
            'gatsby-plugin-typography',
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `img`,
                path: `${__dirname}/src/images/`
              }
            },
            {
              resolve: `gatsby-plugin-typography`,
              options: {
                pathToConfigModule: `src/utils/typography.js`,
              }
            }
          ]
            
};
