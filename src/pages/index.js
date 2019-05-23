import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import 'bulma/css/bulma.css'
import moment from "moment"
// import Img from 'gatsby-image'
import SEO from "../components/seo"



const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Page One" />
    <ul style={{ margin: "0" }}>
      {data.allStrapiArticle.edges.slice(0, 3).map(document => (

        <li key={document.node.id} style={{ border: "1px", marginBottom: "30px" }}>

          <div className="box">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong style={{ fontSize: "20px" }}><Link to={`/${document.node.id}`}>{document.node.title}</Link></strong>
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: document.node.quotes }} />
                  <br></br>
                  {/* <Img fixed={document.node.image.childImageSharp.fixed} /> */}
                  <p style={{ marginTop: "-15px" }}>Post On {moment(document.node.date).format("MMMM D YYYY")}</p>

                </div>

              </div>
            </article>
          </div>
        </li>
      ))}
    </ul>


    <Link to="/page-2/">Go to page 2</Link>


  </Layout >
)

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  allStrapiArticle {
            edges {
              node {
            id
            title
            content
            quotes
            date
            image {
              childImageSharp {
                fixed(width: 200, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
              }
            }
            }
            }
`