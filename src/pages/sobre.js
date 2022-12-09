import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import * as sobreStyles from '../styles/sobre.module.scss'

import fotoPerfil from './markdown/sobre/img/sobre.png'



const TermoPage = () => {

    const data = useStaticQuery (graphql `
    query {
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: "general-featured"
            }
        ){
            publicURL
        }
                        
    }
`)
    
    return (
        <Layout>
            <Head 
                title = "Sobre" 
                description = "Sobre o site www.erics.com.br"
                featuredImage = {data.file.publicURL}
                url = ""
            />

            <div className={sobreStyles.content}>

            
                <h1>Sobre o website</h1>
                
                <p>ericdornelas.com.br é um site de objetivo educacional, que busca fornecer conhecimentos de economia e investimentos no mercado financeiro ao pequeno investidor, sempre com linguagem acessível e abordagem prática. </p>
                <p>Antes de utilizar este website e seu conteúdo, conheça o <Link to="/termo-de-uso">Termo de Uso</Link> e a <Link to="/politica-de-privacidade">Política de Privacidade</Link>.</p>


                

                <div className={sobreStyles.sobreImgDiv}>
                <h3>O Autor</h3>
                <img   src={fotoPerfil} alt="Foto do autor de Investindo"></img>
                </div>


                <p>Eric Dornelas, proprietário e autor do conteúdo deste website é formado em Administração e Ciências Aeronáuticas pela Academia da Força Aérea Brasileira. </p>



                <p>Em 2009 iniciou seu caminho no mundo dos investimentos, começando pelos Fundos de Investimento e mais tarde se aprofundando na Renda Variável.</p>



                <p>Desde o começo, se interessou muito pelo tema se dedicando a leitura de livros, cursos e muito estudo sobre o mercado financeiro. Com o tempo, percebeu que seus amigos e familiares, assim como as pessoas em geral, ainda tinham dúvidas muito básicas sobre investimentos e que havia uma falta de ensinamentos realmente práticos sobre o assunto.</p>



                <p>Com isso em mente, escreveu o livro <em><Link to="/livros">Aprenda a Investir no Mercado Financeiro</Link></em>, com uma abordagem simples e prática de como investir em ativos financeiros em geral.</p>



                <p>Este site surgiu como um complemento ao livro buscando aumentar o alcance e as possibilidades de transmissão das informações.</p>



                <p>Sempre em busca da melhoria contínua, característica desenvolvida ao longo de sua carreira como administrador e piloto, 
                    o autor segue estudando e aprendendo cada vez mais. Através deste <em>site</em> e dos livros de sua autoria procura tornar a linguagem dos investimentos financeiros mais acessível, 
                    com foco em entregar conhecimento de forma simples e prática.</p>

                
                <p>Ampliando o alcance desse conhecimento, espera que cada vez mais pessoas possam investir com segurança, colher os frutos de seus esforços e tornar o Brasil um país melhor.</p>


                
            </div>
            
        </Layout>
    )
}

export default TermoPage