import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './verbessern.css'

const Verbessern = (props) => {
  return (
    <div className="verbessern-container">
      <Helmet>
        <title>verbessern - AI-Kitchen</title>
        <meta property="og:title" content="verbessern - AI-Kitchen" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="verbessern-container1">
        <h1>Verbessern Sie Ihre Gerichte mit AI-Kitchen!</h1>
        <span className="verbessern-text1">
          Verbessern Sie Ihre Gerichte mit AI-Kitchen! 🍽️🔥 Unser AI-Tool
          analysiert Rezepte und liefert clevere Vorschläge zur Perfektionierung
          von Geschmack und Präsentation. 🧪💡 Erleben Sie den kulinarischen
          Fortschritt dank KI-Technologie! 🚀🍳
        </span>
      </div>
      <div className="verbessern-container2">
        <input
          type="text"
          placeholder="Nudeln mit Soße"
          className="verbessern-textinput input"
        />
        <button
          id="verbessern"
          type="button"
          className="verbessern-button button"
        >
          Abschicken
        </button>
      </div>
    </div>
  )
}

export default Verbessern
