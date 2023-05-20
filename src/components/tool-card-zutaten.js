import React from 'react'

import PropTypes from 'prop-types'

import './tool-card-zutaten.css'

const ToolCardZutaten = (props) => {
  return (
    <div className={`tool-card-zutaten-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="tool-card-zutaten-image"
      />
      <div className="tool-card-zutaten-container">
        <div className="tool-card-zutaten-container1">
          <span className="tool-card-zutaten-text">{props.label}</span>
        </div>
        <h1 className="tool-card-zutaten-text1">{props.title}</h1>
        <span className="tool-card-zutaten-text2">{props.description}</span>
        <div className="tool-card-zutaten-container2">
          <div className="tool-card-zutaten-profile"></div>
          <span className="tool-card-zutaten-text3">Ausprobieren</span>
        </div>
      </div>
    </div>
  )
}

ToolCardZutaten.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1623265300797-4a3541e29a60?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHNob3BwaW5nJTIwbGlzdHxlbnwwfHx8fDE2ODQ1NTkwODZ8MA&ixlib=rb-4.0.3&w=1500',
  title: 'Lassen Sie AI-Kitchen Ihre Rezepte zaubern',
  description:
    '📝✨ Erstellen Sie mühelos Rezepte aus einer Zutatenliste mit AI-Kitchen! Geben Sie einfach Ihre Zutaten ein, und AI-Kitchen generiert kreative und maßgeschneiderte Rezeptvorschläge. Entfachen Sie Ihre kulinarische Kreativität und überraschen Sie mit köstlichen Gerichten! 🍽️🎉',
  label: 'Zutaten',
}

ToolCardZutaten.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
}

export default ToolCardZutaten
