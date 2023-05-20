import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Accordion"
      className={`header-header ${props.rootClassName} `}
    >
      <Link to="/" className="header-navlink">
        <h1 className="header-text">{props.heading}</h1>
      </Link>
      <div className="header-separator"></div>
      <nav className="header-nav">
        <NavigationLinks
          rootClassName="rootClassName19"
          className=""
        ></NavigationLinks>
      </nav>
      <div data-role="AccordionHeader" className="header-accordion-header">
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            className=""
          ></path>
        </svg>
      </div>
      <div data-role="AccordionContent" className="header-accordion-content">
        <div className="header-nav1">
          <NavigationLinks
            rootClassName="rootClassName20"
            className=""
          ></NavigationLinks>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  heading: 'AI Kitchen',
  rootClassName: '',
}

Header.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
