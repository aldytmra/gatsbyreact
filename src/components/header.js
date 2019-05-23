import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import 'bulma/css/bulma.css'

const NavbarBurger = props => (
  <a
    onClick={props.toggleMenu}
    className={` navbar-burger burger ${props.active ? "is-active" : ""}`}
    style={{ backgroundColor: "transparent", border: "0", color: "white", }} >
    <span />
    <span />
    <span />
  </a>
);

class Header extends React.Component {
  state = {
    activeMenu: false
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };
  render() {
    return (

      <header style={{
        background: "#ED4444",
        marginBottom: `1.45rem`,
      }}
      >
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{
          margin: `0 auto`,
          Width: "100%",
        }}>
          <div className="navbar-brand" >
            <a className="navbar-item" href="https://bulma.io">
              {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
              Loginov
            </a>

            {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> */}
            <NavbarBurger
              active={this.state.activeMenu}
              toggleMenu={this.toggleMenu}
            />
          </div>

          <div className={`navbar-menu ${this.state.activeMenu ? "is-active" : ""}`}>
            <div className="navbar-end">
              <a className="navbar-item" >
                Articles
              </a>
              <a className="navbar-item" >
                About
              </a>
              <a className="navbar-item" >
                Now
              </a>

            </div>


          </div>
        </nav>
      </header >

    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
