import React, { useEffect, useRef, useState } from 'react'
import { formatDistance } from 'date-fns'

const DateCreated = ({ createdTask }) => {

        let result = formatDistance(
            createdTask,
          new Date(),
         )
      
  return <span className="created">{`created ${result} ago`}</span>
}

export default DateCreated
