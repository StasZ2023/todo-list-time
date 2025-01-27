import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Context } from '../../../Context/Context'

const ClearCompleted = () => {
  const { setTasks } = useContext(Context)
  const clear = () => {
    setTasks((tasks) => {
      return tasks.filter((item) => item.active)
    })
  }

  return (
    <button className="clear-completed" onClick={() => clear()}>
      Clear completed
    </button>
  )
}

ClearCompleted.propTypes = {
  clear: PropTypes.func,
}

export default ClearCompleted
