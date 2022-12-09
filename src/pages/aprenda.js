import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import * as aprendaStyles from '../styles/aprenda.module.scss'





const AprendaPage = () => {

    const data = useStaticQuery (graphql `
    query {
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: "aprenda-featured"
            }
        ){
            publicURL
        }
        itens: allMarkdownRemark (
            filter:{
            frontmatter: {
                    pageType: {
                        ne: "page"
                    }
                    sectionSlug: {
                        eq: "aprenda"
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
                title = "Aprenda" 
                description = "Aprenda a investir em renda variável, renda fixa, fundos e outros ativos financeiros de forma simples e rápida."
                featuredImage = {data.file.publicURL}
                url = ""
            />
            <h1 className={aprendaStyles.title}>Aprenda</h1>
            <p className={aprendaStyles.subtitle}>Tudo o que você precisa saber para começar a investir.</p>
            <div className ={aprendaStyles.content}>
                
                    
                    {data.itens.edges.map((edge) => {

                        if(edge.node.frontmatter.subcategorySlug === ""){

                            return (
                                
                                <h3 className = {aprendaStyles.categoryTitle}>             
                                    <Link
                                        to={`${edge.node.frontmatter.categorySlug}`}
                                        
                                    >
                                        
                                        {edge.node.frontmatter.title}
                                    </Link>
                                </h3>
                            )

                        }
                        return(
                            
                            <p className = {aprendaStyles.subcategoryTitle}>            
                                 <Link
                                    to={`${edge.node.frontmatter.categorySlug}/${edge.node.frontmatter.subcategorySlug}`}
                                    className = {aprendaStyles.subcategoryLink}
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

export default AprendaPage