import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import * as pageStyles from '../styles/page.module.scss'

const NotFound = () => {
    return (
        <Layout className={pageStyles.content}>
            <Head title = "Página não encontrada" />
            <h1>Página não encontrada</h1>
            <p>
                <Link to="/">Vá para a página inicial.</Link>
            </p>
        </Layout>

    )
}

export default NotFound