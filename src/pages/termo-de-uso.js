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
                title = "Termo de Uso" 
                description = "Termo de uso do website www.ericdornelas.com.br."
                featuredImage = {data.file.publicURL}
                url = ""
            />

            <div className={termoStyles.content}>

            
                <h1>Termo de Uso</h1>
                
                <p>Bem-vindo,</p>



                <p>Ao utilizar este website e o material disponível em suas
                mídias sociais, tais como Facebook, Instagram, Twitter e Youtube, nós consideramos
                que você aceitou estes Termos e Condições em sua totalidade. Não continue a
                utilizar o website se você não aceitar todos os termos e condições aqui
                estabelecidos.</p>



                <p>Este termos e condições não exigem nada fora do normal. Respeito a si mesmo e ao próximo, respeito às licenças de conteúdo quando for copiar algo e a consciência de que apesar de todos os esforços da equipe do website em prover material correto e atualizado, pode haver alguma informação errada no website, nos aplicativos e nos serviços oferecidos e que a utilização e conferência é inteiramente de sua responsabilidade, não tendo este website e seus donos qualquer responsabilidade legal, nos limites da lei, sobre sua utilização e o resultado que isso possa vir a causar.</p>



                <p>A seguinte terminologia se aplica a estes termos e condições e demais políticas do website: “Cliente”, ”Você”, ”Usuário”, “Seu” ou “Sua” se refere a você, à pessoa que está acessando este website, a qual aceita os termos e condições aqui descritos. “Website”, “Nós” e ”Nosso” se refere ao proprietário deste website. Variações das terminologias acima, no singular, plural, nomes próprios, “ele”, ”ela” ou “eles” são consideradas como possíveis substitutas e portanto se referem às pessoas que acessam o site.</p>



                <h3>DIREITOS INTELECTUAIS</h3>



                <p>Exceto onde indicado, nós somos os donos dos direitos autorais de todo o conteúdo do website. Todos os direitos são reservados. Você pode visualizar ou imprimir páginas de <a href="http://www.ericdornelas.com.br">http://www.ericdornelas.com.br</a> para seu uso pessoal, sujeito às restrições  impostas neste Termo.</p>



                <p>Exceto onde indicado, você não deve:</p>



                <ul>
                    <li>Republicar conteúdo de <a href="http://www.ericdornelas.com.br">http://www.ericdornelas.com.br</a>.</li>
                    <li>Vender, alugar ou licenciar conteúdo de <a href="http://www.ericdornelas.com.br">http://www.ericdornelas.com.br.</a></li>
                    <li>Reproduzir, copiar ou duplicar conteúdo de <a href="http://www.ericdornelas.com.br">http://www.ericdornelas.com.br.</a></li>
                    <li>Redistribuir conteúdo de <a href="http://www.ericdornelas.com.br">http://www.ericdornelas.com.br</a> (a não ser que o conteúdo seja específico para redistribuição).</li>
                </ul>


                <h3>CONTEÚDO DO USUÁRIO</h3>


                <p>Em algumas áreas deste website é possível que usuários publiquem e troquem opiniões, informações, material e dados (Comentários), bem como publiquem informações sobre eles mesmos (Perfis). Iremos nos referir a isto como Conteúdo do Usuário. Nós não editamos , publicamos ou revisamos Conteúdo do Usuário antes que ele esteja disponível no website e este conteúdo não reflete nossas opiniões sobre qualquer assunto. Conteúdo do Usuário reflete apenas a opinião da pessoa que fez a publicação. No que for permitido dentro da lei nós não nos responsabilizamos pelo Conteúdo do Usuário ou a qualquer dano, perda ou sanções legais causadas ou sofridas devido ao uso ou publicação de Conteúdo do Usuário neste website.</p>

                <p>Este website se reserva o direito de monitorar todo Conteúdo do Usuário e remover qualquer Conteúdo do Usuário que considerarmos inadequado, sem que seja necessário fornecer explicação para tal.</p>

                <p>Ao utilizar as ferramentas de Conteúdo do Usuário você
                garante que:</p>

                <ul>
                    <li>Você tem o direito e as licenças sobre o conteúdo do usuário que está publicando em nosso website.</li>
                    <li>Que o Conteúdo do Usuário não infringe nenhum direito autoral de qualquer pessoa ou empresa.</li>
                    <li>Que o conteúdo do usuário não contém difamações, xingamentos, palavras de baixo calão, ofensas, indecências ou qualquer outro material ilegal ou que possa constituir invasão de privacidade.</li>
                    <li>Que o Conteúdo do Usuário não vai ser utilizado para promover negócios ou atividades comercias bem como qualquer tipo de atividade ilegal.</li>
                </ul>



                <p>De agora em diante você nos garante uma licença não
                exclusiva e sem <em>royalties</em> para usar, reproduzir,
                editar e autorizar outros a utilizarem, reproduzirem ou editarem qualquer um
                dos seus comentários em qualquer formato ou tipo de mídia.</p>



                <p>Este termo não irá limitar qualquer responsabilidade legal nossa ou sua além do que é permitido na lei.</p>



                <p>Ocasionalmente este website poderá oferecer links, serviços ou
                aplicativos de terceiros. Estes terceiros possuem termos de utilização e
                políticas de privacidade próprias, portanto não temos responsabilidade pelo
                conteúdo ou atividades destes terceiros e recomendamos que você tome
                conhecimento de suas regras. De qualquer maneira, qualquer sugestão a respeito
                desses serviços será bem-vinda.</p>



                <h3>UTILIZAÇÃO DO CONTEÚDO DO WEBSITE</h3>



                <p>Este website tem apenas objetivos educacionais. Nenhuma informação aqui fornecida tem como objetivo prover indicações, recomendações ou dicas de métodos ou estratégias de investimento específicos ou de qualquer tipo de ativo financeiro, geral ou específico.</p>



                <p>Ao fazer uso deste website você reconhece que seus donos aplicam todos os esforços ao seu alcance para prover conteúdo atualizado e correto, mas que é possível existirem erros e informações desatualizadas ou incompletas. Qualquer erro ou informação desatualizada pode ser reportada através dos e-mails de contato deste website e será corrigida assim que possível.</p>



                <p>Ao utilizar este website você reconhece que é o único responsável pela aplicação e utilização das informações aqui disponibilizadas, bem como se responsabiliza em conferir sua validade e correção nas fontes legais e através de profissionais habilitados do mercado financeiro, isentando este website e seus donos de qualquer mau uso ou má aplicação das informações bem como de qualquer perda, dano ou resultado negativo que você possa vir a ter em suas atividades de investimento.</p>



                <p>Todo o material aqui disponível deve ser utilizado apenas
                como referência para estudo e seu usuário deve confirmar sua validade através
                de fontes de informações oficiais e profissionais antes de realizar seus
                investimentos ou qualquer tipo de atividade.</p>



                <p>Recomendamos que você sempre se mantenha informado e atualizado sobre as leis, normas e qualquer outro conteúdo normativo e legal que regem as atividades de investimento e o mercado financeiro antes de realizar qualquer investimento.</p>



                <h3>UTILIZAÇÃO DAS MÍDIAS SOCIAIS</h3>



                <p>Ao utilizar as mídias sociais deste website e o material
                disponibilizado através delas como vídeos e artigos, você deve estar ciente dos
                respectivos Termos de utilização e Política de Privacidade do website de
                terceiros bem como ter ciência que a utilização do material de autoria deste
                website publicado nestas mídias possui sua própria política de direitos
                autorais.</p>



                <h3>USO DAS TABELAS DE EXCEL, GOOGLE SHEETS, PLUGINS E OUTROS APLICATIVOS</h3>



                <p>Este website fornece ferramentas e aplicativos, daqui em diante nomeados apenas como “aplicativos”, que auxiliam no controle de investimentos financeiros e podem realizar cálculos matemáticos automatizados, os quais podem ser passíveis de erros ou terem seus procedimentos desatualizados em relação às normas legais.</p>



                <p>Algum desses aplicativos são apenas otimizações de aplicativos
                e softwares fornecidos por terceiros.</p>



                <p>A utilização desses aplicativos deve ser feita de forma individual e não comercial, também respeitando os termos de utilização de terceiros quando for o caso.</p>



                <p>É proibida a cópia, duplicação ou distribuição desses aplicativos
                sem o consentimento do dono deste website.</p>



                <p>Todas os aplicativos disponíveis neste website devem ser utilizados apenas como métodos de apoio e referência. O seu usuário é o responsável por conferir a correção dos cálculos e informações exibidas, estando consciente e atualizado em relações às leis e procedimentos legais que regem o mercado financeiro antes de tomar suas decisões.</p>



                <p>Ao fazer uso desses aplicativos você reconhece que:</p>



                <ul>
                    <li>Este website e seus donos não são responsáveis por erros, falhas, política de privacidade e termo de utilização do software de terceiros.</li>
                    <li>Os softwares e aplicativos de terceiros podem possuir seus próprios termos de utilização e política de privacidade e que você deve tomar conhecimento deles, bem como é o responsável em aplicá-los.</li>
                    <li>Você é o responsável por verificar a correção dos cálculos e informações disponíveis nas ferramentas e que este website não se responsabiliza por possíveis erros, falhas ou procedimentos desatualizados existentes nas planilhas.</li>
                    <li>Este website e seus donos não se responsabilizam pelo resultado que a utilização destes aplicativos possa gerar a você e a suas atividades.</li>
                    <li>Os aplicativos podem sofrer atualizações e serem disponibilizadas novas versões, as quais este website procurará divulgar aos seus usuários através das mídias sociais e do próprio website.</li>
                    <li>As atualizações dos aplicativos são resultado do esforço dos proprietários do website em prover material correto e atualizado e que estas atualizações são realizadas conforme a disponibilidade e interesse dos donos do website.</li>
                    <li>Os aplicativos podem vir a apresentar falhas ou erros devido à atualização ou modificação do software ou ferramenta de terceiros e que este website não tem gerência ou responsabilidade sobre isso.</li>
                    <li>É sua responsabilidade a escolha da versão que utiliza e que versões antigas podem conter erros já corrigidos em novas versões.</li>
                </ul>

                <p>Qualquer erro verificado nos aplicativos pode ser reportado através do e-mail de contato deste website e será corrigido quando possível. </p>



                <h3>LEGISLAÇÃO APLICÁVEL</h3>



                <p>Estes Termos de Uso e todas as relações dele decorrentes são submetidas às leis da República Federativa do Brasil.</p>



                <p>O proprietário deste website é Eric Boeira Dornelas.</p>

                <h3>CONTATO</h3>

                <p>Você pode entrar em contato com o autor do website através do email: contato@investindo.org.</p>


                
            </div>
            
        </Layout>
    )
}

export default TermoPage