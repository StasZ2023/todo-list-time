import React, { useState } from 'react'
import './App.css'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { Context } from '../../Context/Context'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      text: 'Completed task',
      active: true,
      edit: false,
      id: 1,
      timer: { minutes: 0, seconds: 3 },
      created: new Date(2024, 11, 6),
    },
    {
      text: 'Editing task',
      active: true,
      edit: false,
      id: 2,
      timer: { minutes: 9, seconds: 40 },
      created: new Date(2024, 10, 6),
    },
    {
      text: 'With timer',
      active: true,
      edit: false,
      id: 3,
      timer: { minutes: 5, seconds: 23 },
      created: new Date(2024, 10, 6),
    },
  ])
  const [filterValue, setFilterValue] = useState('All')

  const leftCount = tasks.filter((item) => item.active).length

  return (
    <Context.Provider
      value={{
        setTasks,
      }}
    >
      <div className="todoapp">
        <Header title="todos" />
        <Main tasks={tasks} filterValue={filterValue} />
        <Footer filterTodos={setFilterValue} leftCount={leftCount} />
      </div>
    </Context.Provider>
  )
}

export default App
