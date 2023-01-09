import React from 'react'
import { Link } from 'gatsby'


import * as navStyles from '../styles/nav.module.scss'

const Nav = () => {
    return(
        <div>
        
        <input type="checkbox"  id="openSidebarMenu" />
        <label for="openSidebarMenu" className={navStyles.sidebarIconToggle}>
            <div className={`${navStyles.spinner} ${navStyles.diagonal} ${navStyles.part1}`}></div>
            <div className={`${navStyles.spinner} ${navStyles.horizontal}`}></div>
            <div className={`${navStyles.spinner} ${navStyles.diagonal} ${navStyles.part2}`}></div>
            
        </label>

        <nav className={navStyles.navContainer} id="navContainer">
            <ul>
                <li><Link to='/aprenda' className={navStyles.navLink}>Aprenda</Link></li>
                <li><Link to='/planilhas' className={navStyles.navLink}>Planilhas</Link></li>
                <li><Link to='/artigos' className={navStyles.navLink}>Artigos</Link></li>
                <li><Link to='/cursos' className={navStyles.navLink}>Cursos</Link></li>
                <li><Link to='/livros' className={navStyles.navLink}>Livros</Link></li>
                <li><Link to='/enciclopedia' className={navStyles.navLink}>Enciclopédia</Link></li>
                {/* <li><Link to='/dados' className={navStyles.navLink}>Dados</Link></li>           */}
                {/* <li className={navStyles.searchIcon}><Link to='/busca' className={navStyles.navLink} ><svg viewBox="0 0 64 64" width="20"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M25.3969696,39.1611652 C33.4027176,47.1669132 46.3825997,47.1669132 54.3883476,39.1611652 C62.3940956,31.1554173 62.3940956,18.1755352 54.3883476,10.1697872 C46.3825997,2.16403923 33.4027176,2.16403923 25.3969696,10.1697872 C17.3912216,18.1755352 17.3912216,31.1554173 25.3969696,39.1611652 Z M26,40 L4.39265863,60.1654762" stroke="#333" stroke-width="6"></path></g></svg></Link></li>  */}
            </ul>
        </nav>
        </div>

        
    )
}

export default Nav