import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'


import Head from '../components/head'
import Layout from '../components/layout'
import * as termoStyles from '../styles/termo.module.scss'





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
                title = "Política de Privacidade" 
                description = "Política de Privacidade do website www.ericdornelas.com.br."
                featuredImage = {data.file.publicURL}
                url = ""
            />

            <div className={termoStyles.content}>

            
                <h1>Política de Privacidade</h1>
                
                
                <p>Seus dados não são vendidos para terceiros.</p>



                <p>Algumas informações são coletadas por ferramentas como
                Google Analytics, que fazem uso de cookies para coletar dados com o objetivo de
                entender o uso do website.</p>



                <p>Esta Política de Privacidade esclarece quais informações  são coletadas  dos usuários visitantes do website <a href="http://www.ericdornelas.com.br">http://www.investindo.org</a>, daqui em diante referido apenas como &#8220;website&#8221;, e dos usuários dos aplicativos e serviços oferecidos no website, bem como de que forma esses dados são utilizados.</p>



                <h3>INFORMAÇÕES COLETADAS</h3>



                <p>Suas informações são coletadas das seguintes maneiras:</p>


                <ul>
                    <li>Quando você envia uma mensagem de e-mail diretamente ou através do formulário de contato.</li>
                    <li>Preenche formulários para envio de comentários ou faz uso da ferramenta de busca do site.</li>
                    <li>Segue, curte, envia mensagens ou interage de alguma forma com as contas de mídias sociais do website e do autor, incluindo Facebook, Instagram, Google Plus, YouTube e Twitter.</li>
                </ul>


                <p>As informações que você envia podem incluir (dependendo das
                circunstâncias):</p>


                <ul>
                    <li>Identidade e dados de contato: nome, sobrenome, endereço de e-mail, telefone, endereço e assinatura.</li>
                </ul>


                <h3>USO DAS TABELAS E PLUGINS DE EXCEL, GOOGLE SHEETS E OUTROS APLICATIVOS</h3>



                <p>As tabelas de Excel, Google Sheets e demais aplicativos disponibilizados pelo website  não enviam dados ou informações dos usuários para utilização pelo website.</p>



                <p>Estes softwares podem possuir sua própria política de
                privacidade, o que pode incluir a utilização dos seus dados pelas empresas
                produtoras dos softwares e aplicativos online.</p>



                <p>Este website não tem qualquer relação com as empresas
                fornecedoras dos softwares e aplicativos.</p>



                <p>Recomenda-se que você tome conhecimento de como seus dados são utilizados por essas empresas.</p>



                <h3>USO DOS SERVIÇOS DO GOOGLE</h3>



                <p>Este site faz uso de ferramentas como o Google Analytics para
                coletar estatísticas de acesso , aplicativos e ferramentas como Google Sheets,
                além do Google AdSense para publicação de anúncios.</p>



                <p>Você pode entender como o Google coleta e processa seus
                dados através do link:</p>



                <p><a href="https://www. policies.google.com/technologies/partner-sites?hl=pt-BR">https://www. policies.google.com/technologies/partner-sites?hl=pt-BR</a></p>



                <h3>USO DE COOKIES</h3>



                <p>Para melhorar a experiência do usuário e possibilitar a
                coleta de dados para ferramentas como o Google Analytics o site pode utilizar
                cookies. </p>



                <p>Cookies são pequenos arquivos de texto que um site envia
                para o seu computador através do seu navegador e funcionam como uma ferramenta
                para lembrar preferências e informações.</p>



                <h3>COMO VOCÊ PODE EVITAR A UTILIZAÇÃO DE COOKIES</h3>



                <p>Você pode impedir a utilização de cookies selecionando as configurações
                apropriadas do seu navegador, no entanto é possível que isso prejudique sua experiência
                na utilização do website.</p>



                <h3>USO DE COOKIES PELO GOOGLE ANALYTICS</h3>



                <p>Este website utiliza o Google Analytics, um serviço que transmite informações de tráfego do site para servidores do Google nos Estados Unidos da América. O Google Analytics não identifica usuários individuais ou associa seu endereço IP a qualquer dado obtido pelo Google. Os relatórios gerados pelo Google Analytics são utilizados para entender o tráfego e a utilização do website.</p>



                <p>O site abaixo descreve como o Google Analytics utiliza cookies para avaliar as interações do usuário em sites:</p>



                <p><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</a></p>



                <h3>RECURSO DE PUBLICIDADE DO GOOGLE ANALYTICS</h3>



                <p>Este site pode fazer uso de ferramentas de publicidade do Google Analytics para implementar a visualização de anúncios e a ferramenta de <em>Remarketing</em>. <em>Remarketing</em> é uma ferramenta do Google AdWords que possibilita otimizar a exibição de anúncios direcionados aos usuários baseados em suas visitas anteriores ao site.</p>



                <p>Para mais informação sobre este recurso visite o site:</p>



                <p><a href="https://support.google.com/analytics/answer/2611268?hl=pt-BR">https://support.google.com/analytics/answer/2611268?hl=pt-BR</a></p>



                <h3>DESABILITAR O GOOGLE ANALYTICS</h3>



                <p>Você pode impedir o Google Analytics de coletar suas
                informações através do add-on fornecido pela Google:</p>



                <p><a href="https://tools.google.com/dlpage/gaoptout?hl=pt_BR">https://tools.google.com/dlpage/gaoptout?hl=pt_BR</a></p>



                <p>Você também pode desabilitar a exibição de anúncios através de sua conta Google:</p>



                <p><a href="https://adssettings.google.com/">https://adssettings.google.com/</a></p>



                <p>Outra opção é desabilitar a exibição de anúncios configurando as opções necessárias do seu Navegador. </p>



                <p>Você pode ainda usar a ferramenta <em>NAI Opt Out</em> no endereço <a href="https://optout.networkadvertising.org/">https://optout.networkadvertising.org/</a> para desabilitar a visualização de anúncios.</p>



                <h3>UTILIZAÇÃO DAS INFORMAÇÕES</h3>



                <p>Suas informações, além do uso pelas ferramentas de terceiros como já especificado acima, são utilizadas apenas para que o autor do website faça contato através de e-mail ou mídias sociais com o intuito de responder a questionamentos ou sugestões.</p>



                <p>Suas informações, conforme preenchidas nos respectivos formulários, podem ficar disponíveis para visualização no site quando você faz um comentário em algum artigo e este é aprovado pelo autor para ficar visível.</p>



                <h3>PUBLICAÇÃO DE COMENTÁRIOS</h3>



                <p>Todos os comentários e contatos feitos pelos usuários do website através do formulário de comentários, de e-mail ou das mídias sociais são alvo de averiguação pelo autor do website ou de seus funcionários e podem ser excluídos ou impedidos de serem publicados.</p>



                <h3>NEWSLETTER E ENVIO DE EMAILS</h3>



                <p>Este website não possui serviço de assinatura ou envio de e-mails periódico.O uso de e-mail ou contato individual através das mídias sociais ocorre apenas para responder às dúvidas e comentários dos usuários.</p>



                <h3>SEUS DIREITOS SOBRE AS INFORMAÇÕES COLETADAS</h3>


                <ul>
                    <li>Direito de saber como tratamos as informações coletadas, objetivo que esta Política de Privacidade busca atingir.</li>
                    <li>Pedir acesso às informações coletadas sobre você.</li>
                    <li>Solicitar alteração ou exclusão das suas informações que forem coletadas por este website.</li>
                </ul>

                <h3>COMO EXERCER SEUS DIREITOS SOBRE AS INFORMAÇÕES COLETADAS</h3>



                <p>Você pode exercer seus direitos entrando em contato através do link <a href="http://www.investindo.org/contato">Contato</a> com sua solicitação, a qual cumpriremos sua solicitação a menos que haja razão legal para não o fazer.</p>



                <p>Este website se limita a executar suas solicitações no que tangem as informações coletadas diretamente pelo website, não sendo responsável pela sua interação com o serviço de terceiros.</p>



                <h3>TROCA DE INFORMAÇÃO COM TERCEIROS</h3>



                <p>É possível que através da interação com terceiros, através de links, aplicativos ou serviços oferecidos por este website suas informações sejam coletadas por estes terceiros. Nós não possuímos controle sobre estes terceiros e seus procedimentos de coletas de dados e não somos responsáveis pela sua política de privacidade, sendo que este documento não se aplica a eles.</p>



                <p>É importante que você tome conhecimento das Políticas de Privacidade de terceiros. Quando possível, são disponibilizados links neste documento para políticas de privacidade de terceiros com os quais é possível que você interaja.</p>



                <p>Por favor, seja responsável com as informações pessoais enviadas a terceiros quando utilizando nossos website, aplicativos e serviços. Nós não somos responsáveis pelo mau uso de suas informações pessoais ou pela relação entre você e terceiros que possam ocorrer fora deste website.</p>



                <h3>MUDANÇAS NA POLÍTICA DE PRIVACIDADE</h3>



                <p>É possível haver atualizações nesta política de privacidade ocasionalmente. Atualizações e mudanças serão notificadas através do website antes que entrem em vigor.</p>

                <h3>CONTATO</h3>

                <p>Você pode entrar em contato com o autor do website através do email: contato@investindo.org.</p>


                
            </div>
            
        </Layout>
    )
}

export default TermoPage