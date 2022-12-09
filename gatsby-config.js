
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const queries = require('./src/utils/algolia')

module.exports = {
  siteMetadata:{
    title: "ERIC'S",
    author: 'Eric Dornelas',
    email:'contato@erics.com.br',
    // facebook:'http://www.facebook.com/investindoWS/',
    // twitter:'http://www.twitter.com/InvestindoOrg/',
    // youtube:'http://youtube.com/+InvestindoOrgWS',
    url:'https://www.erics.com.br',
    siteUrl:'https://www.erics.com.br'

  },
  plugins:[
    // {
    //   resolve: `@debiki/gatsby-plugin-talkyard`,
    //   options: {
    //     talkyardServerUrl: 'https://comments-demo.talkyard.io'
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-lunr',
    //   options: {
    //     // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
    //     languages: [{name:'pt'}],   
    //     // Fields to index. If store === true value will be stored in index file. 
    //     // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
    //     fields: [
    //       { name: 'title', store: true, attributes: { boost: 20 } },
    //       { name: 'excerpt', store: true },
    //       { name: 'content', store: true },
    //       { name: 'slug', store: true },
    //       { name: 'sectionSlug', store: true },
    //       { name: 'categorySlug', store: true },
    //       { name: 'subcategorySlug', store: true },
    //     ],
    //     // A function for filtering nodes. () => true by default
    //     filterNodes: (node) => !isNil(node.frontmatter),
    //     // How to resolve each field's value for a supported node type 
    //     resolvers: {
    //       // For any node of type MarkdownRemark, list how to resolve the fields' values
    //       MarkdownRemark: {
    //         title: (node) => node.frontmatter.title,
    //         excerpt: (node) => node.excerpt,
    //         content: (node) => node.rawMarkdownBody,
    //         slug: (node) => node.fields.slug,
    //         sectionSlug: (node) => node.frontmatter.sectionSlug,
    //         categorySlug: (node) => node.frontmatter.categorySlug,
    //         subcategorySlug: (node) => node.frontmatter.subcategorySlug,
    //       },
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      },
    },
    
    'gatsby-plugin-sitemap',
    // 'gatsby-plugin-modal-routing',
    // {
    //   resolve: 'gatsby-plugin-algolia',
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
    //     indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    //     queries,
    //     chunkSize: 1000,
    //     enablePartialUpdates: true,
    //     matchFields: ['date']
    //   }
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options:{
          name:'src',
          path:`${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          { resolve: 'gatsby-remark-autolink-headers',
            options:{
              icon: false
            }
          },
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options:{
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-graph',
            options: {
              language: 'mermaid',
              theme: 'neutral'
            }
          },
          {
            resolve: 'gatsby-remark-katex',
            options: {
              displayMode: true,
              strict: 'ignore'

            }
          }
        ]  //    
      }
    }    
  ]
}
