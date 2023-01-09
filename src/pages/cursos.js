import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import * as livrosStyles from '../styles/livros.module.scss'



const LivrosPage = () => {

    const data = useStaticQuery (graphql `
    query {
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: "livros-featured"
            }
        ){
            publicURL
        }
                                
    }
`)
    
    return (
        <Layout>
            <Head 
                title = "Cursos" 
                description = "Cursos em vídeo."
                featuredImage = {data.file.publicURL}
                url = ""
            />

            <div className={livrosStyles.content}>
                <div className={livrosStyles.book}>
                
                    <div class="iframe-container">
                    <iframe src="https://www.youtube.com/embed/YiKAjXVLsFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>            
                
                    <h3 ><Link to="https://www.udemy.com/course/curso-aprenda-a-investir-em-acoes/?referralCode=B962AF1636ED20523470">Compre Agora!</Link></h3>
                    {/* <h3 ><Link to="https://go.hotmart.com/A75780747L">Compre Agora!</Link></h3> */}
                   
               </div>
     
            </div>
            
        </Layout>
    )
}

export default LivrosPage