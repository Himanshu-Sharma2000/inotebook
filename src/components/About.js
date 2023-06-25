import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'


const About = () => {
  const a= useContext(NoteContext)

  useEffect(() => {
    a.update();
   // eslint-disable-next-line
  }, [])
  
  return (
    <div>This is About   {a.state.name} and he is in Course {a.state.Course}</div>
  )
}

export default About