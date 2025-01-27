import React from 'react'
import PropTypes from 'prop-types'

const InputCustom = ({ value, onChange, placeholder, style, type }) => {
  return (
    <input className="input" style={style} placeholder={placeholder} value={value} onChange={onChange} type={type} />
  )
}

InputCustom.defaultProps = {
  style: null,
  type: 'text',
}

InputCustom.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
}

export default InputCustom
