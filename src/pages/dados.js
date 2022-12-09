import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import * as dadosStyles from '../styles/dados.module.scss'





const DadosPage = () => {

    const data = useStaticQuery (graphql `
    query {
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: "dados-featured"
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
                        eq: "dados"
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
        last: allMarkdownRemark(
            limit:20
                    filter:{
          frontmatter: {
                  pageType: {
                      eq: "page"
                  }
                  sectionSlug: {
                      eq: "dados"
                  }
          }
          }
          sort: {
                  fields: [frontmatter___date, frontmatter___title]
                  order: DESC
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
                        date
                      
                  }
              }
          }
      }
                
    }
`)
    
    return (
        <Layout>
            <Head 
                title = "Dados" 
                description = "Resultados e Demonstrações Financeiras das empresas negociadas em Bolsa de Valores para análise por investidores."
                featuredImage = {data.file.publicURL}
                url = ""
            />
            <h1 className={dadosStyles.title}>Dados</h1>
            <p className={dadosStyles.subtitle}>Informações financeiras das empresas listadas em Bolsa.</p>
            <div className ={dadosStyles.content}>
                
                    
                    {data.itens.edges.map((edge) => {

                        if(edge.node.frontmatter.subcategorySlug === ""){

                            return (
                                
                                <h3 className = {dadosStyles.categoryTitle}>             
                                    <Link
                                        to={`${edge.node.frontmatter.categorySlug}`}
                                        
                                    >
                                        
                                        {edge.node.frontmatter.title}
                                    </Link>
                                </h3>
                            )

                        }
                        return(
                            
                            <p className = {dadosStyles.subcategoryTitle}>            
                                 <Link
                                    to={`${edge.node.frontmatter.categorySlug}/${edge.node.frontmatter.subcategorySlug}`}
                                    className = {dadosStyles.subcategoryLink}
                                >
                                    
                                    {edge.node.frontmatter.title}
                                </Link>
                            </p>
                            
                        )
                    })}

                    <div className={dadosStyles.last}>
                        <h3 className = {dadosStyles.lastTitle}>Últimos balanços:</h3>
                        <ul className = {dadosStyles.lastList}>
                        {data.last.edges.map((edge) => {

                           

                                return (
                                        
                                        <li className = {dadosStyles.lastListItem}>       
                                            <Link
                                                to={`${edge.node.frontmatter.categorySlug}/${edge.node.frontmatter.subcategorySlug}/${edge.node.fields.slug}`}
                                                
                                            >
                                                
                                                {edge.node.frontmatter.title}
                                            </Link>
                                        </li>
                                        
                                )

                            
                        })
                        
                        }
                        </ul>
                    </div>
                
            </div>
        </Layout>
    )
}

export default DadosPage