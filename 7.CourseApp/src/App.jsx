import { useState } from 'react'
import './App.css'
import Header from './Header'
import { courses } from './datas'
import Course from './Course'

function App() {

  return (
    <>
      <Header />
      {
        courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))
      }
    </>
  )
}

export default App
