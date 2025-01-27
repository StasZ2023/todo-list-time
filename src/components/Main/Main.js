import React from 'react'
import PropTypes from 'prop-types'

import TaskList from './TaskList/TaskList'

const Main = ({ tasks, filterValue }) => {
  return (
    <main className="main">
      <TaskList tasks={tasks} filterValue={filterValue} />
    </main>
  )
}

export default Main

Main.propTypes = {
  filterValue: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
}
