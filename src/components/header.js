import React from "react"
import { Link } from 'gatsby'
import SearchButton from '../components/search-button'


import * as headerStyles from '../styles/header.module.scss'
import logo from '../img/erics-logo.png'

const Header = () => {
    return (
        <header className={headerStyles.headerContainer}>
            {/* <h1><Link to='/'>ERICS</Link></h1> */}
            <Link to='/'><img   src={logo} alt="Eric's" className={headerStyles.logo}></img></Link>
            {/* <h3>Aprenda a investir de forma simples e rápida!</h3> */}
            
            <SearchButton />     
         </header>        
    )
}

export default Header
