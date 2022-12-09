import React from "react"
import {Link} from 'gatsby'
import * as headerStyles from '../styles/header.module.scss'

const SearchButton = () => {
    return (
                // {/* <div className={headerStyles.search}>
                // <Link to="/busca" className={headerStyles.searchButton}>
                //     <span className={headerStyles.searchButtonSpan}> O que você quer saber?</span>
                    
                //     <span >
                //     <svg viewBox="0 0 64 64" width="20"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M25.3969696,39.1611652 C33.4027176,47.1669132 46.3825997,47.1669132 54.3883476,39.1611652 C62.3940956,31.1554173 62.3940956,18.1755352 54.3883476,10.1697872 C46.3825997,2.16403923 33.4027176,2.16403923 25.3969696,10.1697872 C17.3912216,18.1755352 17.3912216,31.1554173 25.3969696,39.1611652 Z M26,40 L4.39265863,60.1654762" stroke="#333" stroke-width="6"></path></g></svg>
                //     </span>
                // </Link>
                
                //     {/* <input type="search" name="search" size="" placeholder="O que você quer saber?" required/>
                //     <input type="submit" value="" className={headerStyles.submitSearch} /> */}
                    
                // </div> */}  */}

                <div className={headerStyles.search}>
                <Link to="/busca" >
                    <svg viewBox="0 0 64 64" width="20"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M25.3969696,39.1611652 C33.4027176,47.1669132 46.3825997,47.1669132 54.3883476,39.1611652 C62.3940956,31.1554173 62.3940956,18.1755352 54.3883476,10.1697872 C46.3825997,2.16403923 33.4027176,2.16403923 25.3969696,10.1697872 C17.3912216,18.1755352 17.3912216,31.1554173 25.3969696,39.1611652 Z M26,40 L4.39265863,60.1654762" stroke="#333" stroke-width="6"></path></g></svg>
                </Link>
                
                    {/* <input type="search" name="search" size="" placeholder="O que você quer saber?" required/>
                    <input type="submit" value="" className={headerStyles.submitSearch} /> */}
                    
                </div>
    )
}

export default SearchButton