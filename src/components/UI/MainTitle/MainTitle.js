import React from 'react'
import PropTypes from 'prop-types'

const MainTitle = ({ title }) => {
  return <h1 className="main-title">{title}</h1>
}

MainTitle.propTypes = {
  title: PropTypes.string,
}

export default MainTitle
