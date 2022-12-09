import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import * as blogStyles from '../styles/blog.module.scss'


const BlogPage = () => {

    const data = useStaticQuery (graphql`
        query{
            allMarkdownRemark(
            filter: {
                frontmatter:{
                section:{
                    eq:"Blog"
                },
                pageType:{
                    eq:"page"
                }
                }
            }
            sort:{
                fields: frontmatter___date,
                order: DESC
            }
            ) {
                edges {
                    node{
                        fields{
                            slug
                        }
                        frontmatter{
                            section
                            sectionSlug
                            categorySlug
                            subcategorySlug
                            title                        				
                            date
                            pageType
                        }
                    }
                }
            }
            file(
                extension: { 
                    eq: "jpg" 
                }
                name: {
                    eq: "blog-featured"
                }
            ){
                publicURL
            }
        }
    
    `)

    return (
        <Layout>
            
            <Head 
                    title = "Artigos"
                    description = "Artigos sobre economia, finanças e investimentos."
                    featuredImage = {data.file.publicURL}
                    url = "artigos"
            />

            <h1 className = {blogStyles.title}>Artigos</h1>
            <p className = {blogStyles.subtitle}>Artigos sobre economia, finanças e investimentos.</p>
            

            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return(
                        <li className={blogStyles.post}>
                            <Link to={`/${edge.node.frontmatter.sectionSlug}/${edge.node.frontmatter.categorySlug}/${edge.node.frontmatter.subcategorySlug}/${edge.node.fields.slug}`}>
                                <h3>{edge.node.frontmatter.title}</h3>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>  
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage