import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import * as livrosStyles from '../styles/livros.module.scss'

import capaMercadoFinanceiroImg from './markdown/livros/img/capa-mercado-financeiro.jpg'
import capaAcoesImg from './markdown/livros/img/capa-acoes.jpg'
import capaFIIImg from './markdown/livros/img/capa-fii.jpg'
import capaTesouroDiretoImg from './markdown/livros/img/capa-td.jpg'





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
                title = "Livros" 
                description = "Livros escritos por Eric Dornelas."
                featuredImage = {data.file.publicURL}
                url = ""
            />

            <div className={livrosStyles.content}>

            
                <h1 className={livrosStyles.title}>Livros</h1>
                <p className={livrosStyles.subtitle}>Livros escritos por Eric Dornelas.</p>

               <div className={livrosStyles.book}>
                   <img   src={capaMercadoFinanceiroImg} alt="Capa do livro Aprenda a Investir no Mercado Financeiro"></img>
                   <h3 ><Link to="/livros/aprenda-a-investir-no-mercado-financeiro">Aprenda a Investir no Mercado Financeiro</Link></h3>
                   <p className={livrosStyles.bookDescription}>O livro Aprenda a investir no mercado financeiro irá lhe ensinar de forma simples e descontraída,
                       com uma abordagem prática, todos os passos necessários para iniciar seus investimentos de forma segura 
                       e eficaz.</p>
               </div>

               <div className={livrosStyles.book}>
                   <img   src={capaAcoesImg} alt="Capa do livro Aprenda a Investir em Ações"></img>
                   <h3 ><Link to="/livros/aprenda-a-investir-em-acoes">Aprenda a Investir em Ações</Link></h3>
                   <p className={livrosStyles.bookDescription}>O livro Aprenda a Investir em Ações vai introduzi-lo ao mundo da renda variável e da Bolsa de Valores. São abordados desde aspectos tais como a organização do mercado financeir, passando pela elaboração de uma estratégia de investimento e finalizando com análise de empresas .</p>
               </div>

               <div className={livrosStyles.book}>
                   <img   src={capaFIIImg} alt="Capa do livro Aprenda a Investir em Fundos Imobiliários"></img>
                   <h3 ><Link to="/livros/aprenda-a-investir-em-fii">Aprenda a Investir em Fundos Imobiliários.</Link></h3>
                   <p className={livrosStyles.bookDescription}>O livro Aprenda a Investir em Fundos Imobiliários vai ensiná-lo todo o necessário para que você possa começar a investir nesses ativos singulares e passar a receber a sua renda passiva através dos rendimentos mensais pagos pelos FII. </p>
               </div>

               <div className={livrosStyles.book}>
                   <img   src={capaTesouroDiretoImg} alt="Capa do livro Aprenda a Investir no Tesouro Direto"></img>
                   <h3 ><Link to="/livros/aprenda-a-investir-no-tesouro-direto">Aprenda a Investir no Tesouro Direto.</Link></h3>
                   <p className={livrosStyles.bookDescription}>O livro Aprenda a Investir no Tesouro Direto vai introduzi-lo ao mundo dos títulos públicos, descrevendo sua função, características e por que você deve considerá-los como uma opção a ser adicionada na sua carteira de investimentos. Se você já está convencido, mas não sabe como começar, os capítulos sobre como investir mostrarão o que fazer, de forma simples, rápida e prática.</p>
               </div>
     
            </div>
            
        </Layout>
    )
}

export default LivrosPage