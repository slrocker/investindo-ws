import React from 'react'

import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

import '../styles/main.scss'
import * as layoutStyles from '../styles/layout.module.scss'

import GoogleAd from './adsense'

const Layout = (props) => {

    return (
       <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <Nav />
                {props.children}
            </div>
        <GoogleAd />            
        <Footer />
        </div>        
    )
}

export default Layout
