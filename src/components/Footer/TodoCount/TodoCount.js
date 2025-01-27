import React from 'react'

import PropTypes from 'prop-types'

const TodoCount = ({ leftCount }) => {
  return <span className="todo-count">{leftCount} items left</span>
}

TodoCount.propTypes = {
  leftCount: PropTypes.number,
}

export default TodoCount
