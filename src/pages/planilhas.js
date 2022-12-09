import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import * as planilhasStyles from '../styles/planilhas.module.scss'






const PlanilhasPage = () => {

    const data = useStaticQuery (graphql `
    query {
        file(
            extension: { 
                eq: "jpg" 
            }
            name: {
                eq: "planilhas-featured"
            }
        ){
            publicURL
        }
                        
    }
`)
    
    return (
        <Layout>
            <Head 
                title = "Planilhas" 
                description = "Planilhas de Excel e GoogleSheets para controle de investimentos."
                featuredImage = {data.file.publicURL}
                url = ""
            />

            <div className={planilhasStyles.content}>

            
                <h1 className={planilhasStyles.title}>Planilhas</h1>
                <p className={planilhasStyles.subtitle}>Planilhas de Excel e GoogleSheets para investimentos.</p>

                

                <div className={planilhasStyles.warningDiv}>
                    <h2>Atenção</h2>
                    <p>Antes de usar as tabelas, leia o <Link to="/termo-de-uso">Termo de Uso</Link> e a <Link to="/politica-de-privacidade">Política de Privacidade</Link>.</p>
                </div>

                <h2>Excel</h2>

                <div className={planilhasStyles.svgContainer}>
                    <svg viewBox="0 0 96 96" className={planilhasStyles.svgWidth100}>
                    
                        <g>
                            <g>
                                <path className={planilhasStyles.st0excel} d="M89.63,9.1H56.34V1.24L1.63,9.7v74.11l54.71,9.43V81.61h33.28c2.21,0,4.01-1.61,4.01-3.61v-65.3
                                    C93.63,10.71,91.84,9.1,89.63,9.1z M90.15,78.6H56.23l-0.06-6.22h8.17v-7.24h-8.23l-0.04-4.28h8.27v-7.24h-8.34l-0.04-4.28h8.37
                                    v-7.24h-8.4v-4.28h8.4V30.6h-8.4v-4.28h8.4v-7.24h-8.4v-6.58h34.21V78.6z"/>
                                <rect x="68.95" y="19.08" className={planilhasStyles.st0excel} width="14.2" height="7.24"/>
                                <rect x="68.95" y="30.6" className={planilhasStyles.st0excel} width="14.2" height="7.24"/>
                                <rect x="68.95" y="42.12" className={planilhasStyles.st0excel} width="14.2" height="7.24"/>
                                <rect x="68.95" y="53.63" className={planilhasStyles.st0excel} width="14.2" height="7.24"/>
                                <rect x="68.95" y="65.15" className={planilhasStyles.st0excel} width="14.2" height="7.24"/>
                            </g>
                            <polygon className={planilhasStyles.st1excel} points="15.92,29.72 22.97,29.31 27.4,41.52 32.64,28.81 39.69,28.41 31.13,45.73 39.69,63.1 32.23,62.6 
                                27.2,49.36 22.16,62.09 15.31,61.49 23.27,46.14 	"/>'
                        </g>
                    </svg>
                </div>

                <p className={planilhasStyles.downloadVersion}> Versão 1.4.7 (29/07/2020)</p>
                <a className={planilhasStyles.downloadLink} href="https://investindows.s3-sa-east-1.amazonaws.com/Custodia+V1.4.7+Excel+2016+.xlsm">Download</a>
                

                <ul>                    
                    <li><Link to="excel/instrucoes">Instruções de Uso</Link></li>
                    <li><Link to="excel/faq">Dúvidas Frequentes</Link></li>
                    <li><Link to="excel/atualizacoes">Registro de Atualizações</Link></li>
                </ul>

                

                <h2>Google Sheets</h2>

                <div className={planilhasStyles.svgContainer}>
                <svg viewBox="0 0 96 96" className={planilhasStyles.svgWidth100}>
                
                        <g>
                            <path className={planilhasStyles.st0sheets} d="M81.49,90.71c0,3.06-2.48,5.55-5.55,5.55H18.06c-3.06,0-5.55-2.48-5.55-5.55V5.83c0-3.06,2.48-5.55,5.55-5.55
                                h37.22l26.21,26.85V90.71L81.49,90.71z"/>
                            <path className={planilhasStyles.st1sheets} d="M58.16,26.45l23.32,22.28L81.42,27.1l-0.04,0h-20.6c-0.94,0-1.82-0.23-2.6-0.65L58.16,26.45L58.16,26.45z"/>
                            <path className={planilhasStyles.st2sheets} d="M81.49,27.09H60.78c-3.06,0-5.55-2.48-5.55-5.55V0.26L81.49,27.09L81.49,27.09z"/>
                            <path className={planilhasStyles.st3sheets} d="M64.94,78.5H29.06V47.44h35.88V78.5L64.94,78.5z M49.22,51.88v5.55H60.5v-5.55H49.22L49.22,51.88z
                                M49.22,60.75v5.18H60.5v-5.18H49.22L49.22,60.75z M49.22,69.26v4.81H60.5v-4.81H49.22L49.22,69.26z M44.78,74.07v-4.81H33.5v4.81
                                H44.78L44.78,74.07z M44.78,65.93v-5.18H33.5v5.18H44.78L44.78,65.93z M44.78,57.42v-5.55H33.5v5.55H44.78L44.78,57.42z"/>
                        </g>
                    </svg>

                </div>

                <p className={planilhasStyles.downloadVersion}> Versão 0.5.0 beta (14/07/2020)</p>
                <a className={planilhasStyles.downloadLink} href="https://docs.google.com/spreadsheets/d/1846BqVlFISGgqJJY5bZL-38K8kUoChjEp9OCVVRMBDs/copy">Criar Cópia</a>

                <ul>
                    <li><Link to="google-sheets/instrucoes">Instruções de Uso</Link></li>
                    <li><Link to="google-sheets/faq">Dúvidas Frequentes</Link></li>
                    <li><Link to="google-sheets/atualizacoes">Registro de Atualizações</Link></li>
                </ul>

            </div>
            
        </Layout>
    )
}

export default PlanilhasPage