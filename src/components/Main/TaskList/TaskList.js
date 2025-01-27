import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task/Task'

const TaskList = ({ tasks, filterValue }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} filterValue={filterValue} />
      })}
    </ul>
  )
}

TaskList.propTypes = {
  filterValue: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
}

export default TaskList
