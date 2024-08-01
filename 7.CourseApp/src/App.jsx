import { useState } from 'react'
import './App.css'
import Header from './Header'
import { courses } from './datas'
import Course from './Course'

function App() {

  return (
    <>
      <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>

    </>
  )
}

export default App
