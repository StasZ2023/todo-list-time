import React from 'react'
import PropTypes from 'prop-types'

import ClearCompleted from './ClearCompleted/ClearCompleted'
import TodoCount from './TodoCount/TodoCount'
import TaskFilter from './TaskFilter/TaskFilter'



const Footer = ({ filterTodos, leftCount }) => {
  return (
    <footer className="footer">
      <TodoCount leftCount={leftCount} />
      <TaskFilter filterTodos={filterTodos} />
      <ClearCompleted />
    </footer>
  )
}

Footer.propTypes = {
  leftCount: PropTypes.number,
  filterTodos: PropTypes.func,
}

export default Footer
