import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import * as enciclopediaStyles from '../styles/enciclopedia.module.scss'





const EnciclopediaPage = () => {

    const data = useStaticQuery (graphql `
    query {
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: "enciclopedia-featured"
            }
        ){
            publicURL
        }
        itens: allMarkdownRemark (
            filter:{
            frontmatter: {
                    
                    sectionSlug: {
                        eq: "enciclopedia"
                    }
                    pageType: {
                        eq: "subcategory"
                    }
                    
            }
            }
            sort: {
                    fields: [frontmatter___indexOrder, frontmatter___subcategorySlug]
                    order: ASC
                    }
        ) {
            edges {
                node{
                    fields{
                        slug
                    }
                    frontmatter{
                        title
                        sectionSlug
                        categorySlug
                        subcategorySlug
                        pageType
                        
                    }
                }
            }
        }
                
    }
`)
    
    return (
        <Layout>
            <Head 
                title = "Enciclopédia" 
                description = "Termos relacionados à finanças e economia explicados para iniciantes."
                featuredImage = {data.file.publicURL}
                url = ""
            />
            <h1 className={enciclopediaStyles.title}>Enciclopédia</h1>
            <p className={enciclopediaStyles.subtitle}>Em dúvida sobre algo? Dê uma olhada na nossa enciclopédia.</p>
            <div>
                
                    
                    {data.itens.edges.map((edge) => {

                        
                        return(
                            
                            <p className = {enciclopediaStyles.subcategoryTitle}>            
                                 <Link
                                    to={`${edge.node.frontmatter.categorySlug}/${edge.node.frontmatter.subcategorySlug}`}
                                    className = {enciclopediaStyles.subcategoryLink}
                                >
                                    
                                    {edge.node.frontmatter.title}
                                </Link>
                            </p>
                            
                        )
                    })}
                
            </div>
        </Layout>
    )
}

export default EnciclopediaPage