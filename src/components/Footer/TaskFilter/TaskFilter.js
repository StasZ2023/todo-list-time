import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FilterButton = ({ text, handler, isActive }) => {
  return (
    <button type="button" onClick={handler} className={isActive ? 'selected' : null}>
      {text}
    </button>
  )
}

const TaskFilter = ({ filterTodos }) => {
  const [buttons, setButtons] = useState([
    { text: 'All', isActive: true },
    { text: 'Active', isActive: false },
    { text: 'Completed', isActive: false },
  ])

  const clickHandler = (id) => {
    setButtons((buttons) => {
      buttons.map((item, index) => {
        if (id === index) {
          item.isActive = !item.isActive
          filterTodos(item.text)
        } else {
          item.isActive = false
        }
      })
      return buttons
    })
  }

  return (
    <ul className="filters">
      {buttons.map((item, id) => {
        return (
          <li key={id}>
            <FilterButton text={item.text} isActive={item.isActive} handler={() => clickHandler(id)} />
          </li>
        )
      })}
    </ul>
  )
}

TaskFilter.propTypes = {
  filterTodos: PropTypes.func,
}

export default TaskFilter
