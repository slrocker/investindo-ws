import React, { Component } from 'react'
import { Link } from 'gatsby'

import * as SearchStyles from '../styles/search.module.scss'
 
class Search extends Component {
  state = {
    query: '',
    results: [],
  }


  render() {
    return (
      <div className={this.props.classNames}>
        <div className={SearchStyles.formContainer}>
            <input className={SearchStyles.searchInput}
            type='text' 
            value={this.state.query} 
            onChange={this.search} 
            placeholder={'O que você quer saber?'}
            />
        </div>
        <ul className={SearchStyles.resultList}>
          {this.state.results.map((page) => (
          <li key={page.slug} className={SearchStyles.resultItem}>
            <Link
              to={`/${page.sectionSlug}/${page.categorySlug}/${page.subcategorySlug}/${page.slug}`}>
              {page.title}
            </Link>
            
            <p>{page.content.replace(/(<([^>]+)>)/ig, "").replace(/(?:\r\n|\r|\n)/g, " ").replace(/#/g, "").replace(/\[.+\]\(.+\)/g,"").replace(/\*/g,"").replace(/(\$\$(.+)\$\$)/g,"").replace(/  /g, " ").substring(0,300)}...</p>
          </li>
          ))}
        </ul>
      </div>
    )
  }

  getSearchResults(query) {
    if (!query || !window.__LUNR__) return []
    const results = window.__LUNR__.pt.index.search(query)
    return results.map(({ ref }) => window.__LUNR__.pt.store[ref])
  }

  search = event => {
    const query = event.target.value
    const results = this.getSearchResults(query)
    this.setState({ results, query })
  }
}

export default Search