const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)


module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField ({
            node,
            name:'slug',
            value: slug
        })

    }      
    // Transform the new node here and create a new node or
    // create a new node field.
  }
  module.exports.createPages = async({ graphql, actions}) => {
        const {createPage} = actions
        const pageTemplate = path.resolve(`./src/templates/page.js`)
        const categoryTemplate = path.resolve(`./src/templates/category.js`)
        const subCategoryTemplate = path.resolve(`./src/templates/subcategory.js`)
        const res = await graphql(`
            query{
                allMarkdownRemark {
                    edges {
                        node{
                            fields{
                                slug
                            }
                            frontmatter{
                                sectionSlug
                                categorySlug
                                subcategorySlug
                                featuredImage
                                title
                                pageType
                            }
                        }
                    }
                }
            }
        `)


        res.data.allMarkdownRemark.edges.forEach((edge) =>{
            let path;
            let component;
            let section = edge.node.frontmatter.sectionSlug;
            let category = edge.node.frontmatter.categorySlug;
            let subcategory = edge.node.frontmatter.subcategorySlug;
            let slug = edge.node.fields.slug;
            let pageType = edge.node.frontmatter.pageType
            //path for category page
            if(pageType === "category"){
                path = `/${section}/${category}` ;
                component = categoryTemplate;
            } 
            //path for subcategory page
            else if(pageType === "subcategory"){
                path = `/${section}/${category}/${subcategory}`;
                component = subCategoryTemplate;
            } 
            //path for blog posts and page
            else{
                path = `/${section}/${category}/${subcategory}/${slug}`;
                component = pageTemplate;
            }
            
            createPage({
                component:component,
                path: path,
                context:{
                    slug: edge.node.fields.slug,
                    sectionSlug: edge.node.frontmatter.sectionSlug,
                    categorySlug: edge.node.frontmatter.categorySlug,
                    subcategorySlug: edge.node.frontmatter.subcategorySlug,
                    featuredImage: edge.node.frontmatter.featuredImage,
                    title: edge.node.frontmatter.title
                   
                }
            })
        })
  }

