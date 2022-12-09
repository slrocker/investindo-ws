
import React from 'react'
import {graphql, Link} from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'
import "katex/dist/katex.min.css"

import * as pageStyles from '../styles/page.module.scss'

// import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

export const query = graphql `
    query ($slug: String!, $featuredImage: String!) {
        markdownRemark( fields: { slug: {eq: $slug } }) {
            excerpt
            frontmatter{
                title
                date
                section
                sectionSlug
                category
                categorySlug
                subcategory
                subcategorySlug
                
                
            }
            html
            fields{
                slug
            }
        }
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: $featuredImage
            }
        ){
            publicURL
        }
        
        allMarkdownRemark(
            filter: {
              	fields:{
                    slug:{
                        eq: $slug
                    },
                  }
            }
      	) {
            edges {
            node {
                headings{
                        value
                        depth
                }
                
            }
            }
        }
    }
`


const TemplatePage = (props) => {    
            
    return (

        <Layout>        

            
        

            <Head 
                    title = {props.data.markdownRemark.frontmatter.title}
                    description = {props.data.markdownRemark.excerpt}
                    featuredImage = {props.data.file.publicURL}
                    url = {`/${props.data.markdownRemark.frontmatter.sectionSlug}/${props.data.markdownRemark.frontmatter.categorySlug}/${props.data.markdownRemark.frontmatter.subcategorySlug}/${props.data.markdownRemark.fields.slug}`}
            />

            <div className={pageStyles.breadCrumb}>
                <p>
                    <Link to={`/${props.data.markdownRemark.frontmatter.sectionSlug}/`}>
                        {props.data.markdownRemark.frontmatter.section}
                    </Link>
                    <span>></span>
                    <Link to={`/${props.data.markdownRemark.frontmatter.sectionSlug}/${props.data.markdownRemark.frontmatter.categorySlug}/`}>
                            {props.data.markdownRemark.frontmatter.category}
                    </Link>
                     <span>></span>
                    <Link to={`/${props.data.markdownRemark.frontmatter.sectionSlug}/${props.data.markdownRemark.frontmatter.categorySlug}/${props.data.markdownRemark.frontmatter.subcategorySlug}/`}>
                           {props.data.markdownRemark.frontmatter.subcategory}
                    </Link>
                    <span></span>
                </p>        
            </div>



            <div className={pageStyles.header}>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            </div>

            <div className={pageStyles.toc}>
                <p><a href="#">CONTEÚDO</a></p>
                <ul>
                    {props.data.allMarkdownRemark.edges.map( edge => edge.node.headings.map((heading) => {
                        
                        if (heading.depth === 3){
                            return(
                            
                            <li className={pageStyles.depth3}><a href={`#${heading.value.replace(/\s/g,"-").replace(/[!?.()]/g,"").toLowerCase()}`}>{heading.value}</a></li>
                            
                            )              

                        }
                        if (heading.depth === 4){
                            return(
                            
                            <li className={pageStyles.depth4}><a href={`#${heading.value.replace(/\s/g,"-").replace(/[!?./()]/g,"").toLowerCase()}`}>{heading.value}</a></li>
                            
                            )              

                        }
                        return(
                            
                                <li><a href={`#${heading.value.replace(/\s/g,"-").replace(/[!?./())]/g,"").toLowerCase()}`}>{heading.value}</a></li>
                            
                        )}
                    ))}
                </ul>
            </div>            

           
           
            {/* <div className={props.data.markdownRemark.frontmatter.sectionSlug === "Dados" ? pageStyles.content_dados : pageStyles.content } dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div> */}
            <div className={pageStyles.content} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>

            <div className={pageStyles.lastUpdate}>Última atualização: {props.data.markdownRemark.frontmatter.date}</div>


            
            {/* <TalkyardCommentsIframe />   */}
        
        
        </Layout>
    )
}

export default TemplatePage
