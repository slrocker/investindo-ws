import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import * as pageStyles from '../styles/page.module.scss'

const ThanksPage = () => {
    return (
        <Layout className={pageStyles.content}>
            <Head title = "Sucesso!" />
            <h1>Sua mensagem foi enviada!</h1>
            <p>
                <Link to="/">Vá para a página inicial.</Link>
            </p>
        </Layout>

    )
}

export default ThanksPage