import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Context } from '../../../../Context/Context'

import DateCreated from './DateCreated/DateCreated'

const Task = ({ task, filterValue }) => {
  const { setTasks } = useContext(Context)
  const [timer, setTimer] = useState({
    minutes: task.timer.minutes,
    seconds: task.timer.seconds,
  })
  const [isTimerStart, setIsTimerStart] = useState(false)
  const [isActive, setIsActive] = useState(task.active)
  let timerId

  const setTimerId = () => {
    let minutes = timer.minutes
    let seconds = timer.seconds
    if (minutes <= 0 && seconds <= 0) {
      clearInterval(timerId)
      return
    }

    seconds--

    if (seconds < 0) {
      minutes--
      seconds = 59
    }

    setTimer({
      minutes,
      seconds,
    })
  }

  useEffect(() => {
    if (isTimerStart) {
      timerId = setInterval(() => {
        startTimer()
      }, 1000)
      return () => clearInterval(timerId)
    }
  }, [timer, isTimerStart])

  const startTimer = () => {
    if (isActive && !isTimerStart) {
      setIsTimerStart(true)
    }

    if (isActive) {
      setTimerId()
    }
  }

  const pauseTimer = () => {
    setIsTimerStart(false)
    clearInterval(timerId)
  }

  const onLabelClick = () => {
    if (isActive) {
      pauseTimer()
    }
    setIsActive(!isActive)
    setTasks((tasks) => {
      const index = tasks.findIndex((item) => item === task)
      const newTasks = [...tasks]
      newTasks[index].active = !newTasks[index].active
      return newTasks
    })
  }

  const itemDelete = () => {
    setTasks((tasks) => {
      return tasks.filter((item) => item !== task)
    })
  }

  const minutes = timer.minutes < 10 ? `0${+timer.minutes}` : timer.minutes
  const seconds = timer.seconds < 10 ? `0${+timer.seconds}` : timer.seconds

  return (
    <li
      className={`todo-item ${!isActive ? 'completed' : ''} 
      ${task.edit ? 'editing' : ''}
      ${filterValue === 'Active' && !isActive ? 'visually-hidden' : ''}
      ${filterValue === 'Completed' && isActive ? 'visually-hidden' : ''}`}
    >
      {task.edit ? (
        <input type="text" className="edit" value={task.text} />
      ) : (
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onLabelClick} />
          <div className="task-description">
            <label onClick={onLabelClick}>
              <span className="description">{task.text}</span>
            </label>
            <div className="task-timer">
            {isTimerStart ? <button onClick={pauseTimer} className="icon icon-pause" />:
             <button onClick={startTimer} className="icon icon-play" /> 
             }
              {/* <button onClick={startTimer} className="icon icon-play" />
              <button onClick={pauseTimer} className="icon icon-pause" /> */}
              <span>{`${minutes}:${seconds}`}</span>
            </div>
            <DateCreated createdTask={task.created} />
          </div>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" onClick={itemDelete} />
        </div>
      )}
    </li>
  )
}

export default Task

Task.propTypes = {
  task: PropTypes.object,
  filterValue: PropTypes.string,
}
