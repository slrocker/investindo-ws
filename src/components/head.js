import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql} from 'gatsby'




const Head = ({ title, description, featuredImage, url }) => {

    const data = useStaticQuery (graphql `

        query {
            site{
                siteMetadata {
                    title
                    url
                }
            }
        }

    `)

    
    return(
        //<Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
        <Helmet>
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <meta property="description" content={`${description}`} />
            {/*Facebook*/}
            <meta property="og:title" content={`${title} | ${data.site.siteMetadata.title}`} />
            <meta property="og:description" content={`${description}`} />
            {/* <meta property="og:image" content={`${data.site.siteMetadata.url}${featuredImage}`} />
            <meta property="og:url" content={`${data.site.siteMetadata.url}/${url}`} />
            <meta name="twitter:card" content="summary_large_image" /> */}
            <meta property="og:site_name" content="Eric's" />
        </Helmet>
    )
}

export default Head