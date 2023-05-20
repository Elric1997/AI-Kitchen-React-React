import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './tool-card-verbessern.css'

const ToolCardVerbessern = (props) => {
  return (
    <div
      className={`tool-card-verbessern-blog-post-card ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="tool-card-verbessern-image"
      />
      <div className="tool-card-verbessern-container">
        <div className="tool-card-verbessern-container1">
          <span className="tool-card-verbessern-text">{props.label}</span>
        </div>
        <h1 className="tool-card-verbessern-text1">{props.title}</h1>
        <span className="tool-card-verbessern-text2">{props.description}</span>
        <div className="tool-card-verbessern-container2">
          <div className="tool-card-verbessern-profile"></div>
          <Link to="/verbessern" className="tool-card-verbessern-navlink">
            Ausprobieren
          </Link>
        </div>
      </div>
    </div>
  )
}

ToolCardVerbessern.defaultProps = {
  description:
    'Verbessern Sie Ihre Gerichte mit AI-Kitchen! 🍽️🔥 Unser AI-Tool analysiert Rezepte und liefert clevere Vorschläge zur Perfektionierung von Geschmack und Präsentation. 🧪💡 Erleben Sie den kulinarischen Fortschritt dank KI-Technologie! 🚀🍳',
  rootClassName: '',
  label: 'Verbessern',
  profile_alt: 'profile',
  when: '3 days ago',
  image_alt: 'image',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  image_src:
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxmb29kfGVufDB8fHx8MTY4NDU1NzM0OXww&ixlib=rb-4.0.3&w=1500',
  author: 'Jane Doe',
  title: 'Verbessern Sie Ihre Gerichte mit AI-Kitchen!',
}

ToolCardVerbessern.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  profile_alt: PropTypes.string,
  when: PropTypes.string,
  image_alt: PropTypes.string,
  profile_src: PropTypes.string,
  image_src: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
}

export default ToolCardVerbessern
