import React from 'react'
import '../App.css';

const WorkItem = (title,time,description,company) => {
  return (
    <div className='work-item'>
        <div>{time}</div>
    </div>
  )
}

export default WorkItem