/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Image from "./image"


const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}



    render={data => (
      <>
        <Header />
        <main >
          <div className="column is-mobile">
            <br></br>
            <div className="row" style={{ verticalAlign: "middle" }}>
              <center><Image />&nbsp;<span style={{ fontSize: "45px", fontWeight: "bold" }}>Articles</span></center>
            </div>

            <br></br>
            <div className="contents column is-half-desktop">
              {children}
            </div>
          </div>

        </main>
      </>
      // {/* <footer>
      //             © {new Date().getFullYear()}, Built with
      //             {` `}
      //             <a href="https://www.gatsbyjs.org">Gatsby</a>
      //           </footer> */}


    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
