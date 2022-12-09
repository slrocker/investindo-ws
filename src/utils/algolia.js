const markDownQuery = `
        query{
            allMarkdownRemark(
                filter: {
                    frontmatter:{
                        pageType:{
                            eq:"page"
                        }
                    }
                }
            ) {
                edges {
                    node{
                        
                        fields{
                            slug
                        }
                        excerpt(pruneLength: 280)
                        frontmatter{
                            sectionSlug
                            section
                            categorySlug
                            category
                            subcategorySlug
                            subcategory
                            title                        				
                            date
                            
                        }
                        html
                    }
                }
            }
            
        }
    
    `

const unnestFrontmatter = node => {
    const { frontmatter, ...rest } = node
    
    return {
        ...frontmatter,
        ...rest
    }
}

const handleHTML = node => {
    
    const { html, ...rest } = node
  
   
    const sections = html.split("\n")


    var filtered = sections.filter(function(value,index,arr){

        return value.indexOf('<p>') !== -1

    }) 
    
   
    const records = filtered.map(section => ({
      ...rest,
      content: section
    }))
  
    return records
}
      
// const queries = [
//     {
//         query: markDownQuery,
//         transformer: ({ data }) =>
//         data.allMarkdownRemark.edges.map(edge => edge.node).map(unnestFrontmatter)
//     }
// ]

const queries = [
    {
      query: markDownQuery,
      settings: {
        attributeForDistinct: 'title',
        distinct: 1
      },
      matchFields: ['date'],
      transformer: ({ data }) =>
        data.allMarkdownRemark.edges
          .map(edge => edge.node)
          .map(unnestFrontmatter)
          // Now we take rawBody and manipulate it into many more records
          .map(handleHTML)
          // And we flatten those records into a single array
          // alternatively, flatMap is available wherever ES2019 is implemented
          .reduce((acc, cur) => [...acc, ...cur], [])
    }
  ]

module.exports = queries