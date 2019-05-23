import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from 'gatsby'
import 'bulma/css/bulma.css'
import moment from "moment"
// import Img from 'gatsby-image'

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <ul style={{ margin: "0" }}>
      {data.allStrapiArticle.edges.slice(3, 4).map(document => (

        <li key={document.node.id} style={{ border: "1px", marginBottom: "30px" }}>

          <div className="box">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong style={{ fontSize: "20px" }}><Link to={`/${document.node.id}`}>{document.node.title}</Link></strong>
                  </p>
                  <p>{document.node.content}</p>

                  {/* <Img fixed={document.node.image.childImageSharp.fixed} /> */}
                  <p style={{ marginTop: "-15px" }}>Post On {moment(document.node.date).format("MMMM D YYYY")}</p>

                </div>

              </div>
            </article>
          </div>
        </li>
      ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
export const page2Query = graphql`
query Index2Query {
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
