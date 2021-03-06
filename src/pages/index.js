import { Link, graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"

const Home = props => {
  if (props.data) console.log(props.data)
  return (
    <Layout>
      <div style={{ color: "purple", fontSize: "72px" }}>
        <h3>Hello Gatsby!</h3>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
      <div>

        <h3>{props.data.allMarkdownRemark.totalCount} Total Posts</h3>
        <ul>
          {props.data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>-- {node.frontmatter.date}</span>
                </h3>
                <p>Click for full story</p>
              </Link>
            </div>
          ))}
        </ul>
        <Link to="/about/">About</Link>
        <hr></hr>
        <Link to="/contact/">Contact</Link>
        <hr></hr>
        <Link to="/my-files">Files</Link>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields { 
            slug
          }
          excerpt
        }
      }
    }
  }
` /*.then(res=>{
  if(res.errors) throw res.errors
  return res.data.allMarkdownRemark.edges.filter(item =>{
    return item.node.id !== -1
  })
}) */

export default Home
