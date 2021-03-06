import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby';

import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'

const BlogPage = () => {
    // fetch markdown post data
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    
    `)
    // console.log(data)

    return (

        // render with JSX 
        <Layout>
            <h1>Blog</h1>
            <p>Posts are sourced from the file system and are dynamically generated.</p>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage