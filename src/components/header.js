import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"

const Header = ({ siteTitle, logo, menuLinks = [] }) => (
  <header id="header" className="header container" role="banner">
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
    </Helmet>
    <Link className="logo" to="/" aria-label={siteTitle}>
      {logo}
    </Link>
    <nav id="mainNav" className="main-nav" role="navigation" aria-label="Primary Navigation">
      {menuLinks.map(menuLink => {
        if (menuLink.link.startsWith('mailto')) {
          return (
            <a className="main-nav-link-bubble" href={menuLink.link} key={menuLink.link}>{menuLink.name}</a>
          );
        }

        return (
          <a className="main-nav-link" href={menuLink.link} key={menuLink.link}>{menuLink.name}</a>
        );
      })}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
