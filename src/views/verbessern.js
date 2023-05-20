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
        <input
          type="text"
          placeholder="placeholder"
          className="input verbessern-textinput"
        />
        <button className="button verbessern-button">Button</button>
      </div>
    </div>
  )
}

export default Verbessern
