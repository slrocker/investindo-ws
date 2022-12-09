import React from "react"
import { graphql, useStaticQuery} from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'
import Search from '../components/search'
import * as SearchStyles from '../styles/search.module.scss'


const BuscaPage = () => {

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
  }
      
`)

    // return (
    //     <Layout>
    //     <Head 
    //             title = "Busca" 
    //             description = "Aprenda a investir em renda variável, renda fixa, fundos e outros ativos financeiros de forma simples e rápida."
    //             featuredImage = {data.file.publicURL}
    //             url = ""
    //         />
    //       <h1 className={SearchStyles.header}>Busca</h1>
    //       <Search/>
    //     </Layout>
                 
                 
    // )

        return (
        <Layout>
        <Head 
                title = "Busca" 
                description = "Aprenda a investir em renda variável, renda fixa, fundos e outros ativos financeiros de forma simples e rápida."
                featuredImage = {data.file.publicURL}
                url = ""
            />
            <h1 className={SearchStyles.header}>Busca</h1>
          
            <script async src="https://cse.google.com/cse.js?cx=9899bb9144c39bff8"></script>
            <div class="gcse-search"></div>
        </Layout>
                 
                 
    )
        

}

export default BuscaPage
