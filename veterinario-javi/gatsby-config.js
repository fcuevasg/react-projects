/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`images`,
        path:`${__dirname}/src/images`,
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`servicios`,
        path:`${__dirname}/src/markdowns`,
      }},
      {
        resolve:`gatsby-source-filesystem`,
        options:{
          name:`adopcion`,
          path:`${__dirname}/src/images/adopciones`,
        },
    }

  ],
}
