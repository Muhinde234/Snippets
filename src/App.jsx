import React from 'react'
import './Index.css'

import Header  from "./components/UI/header"
import About from './Pages/about'
import Projects from './Pages/projects'



function App() {
  

  return (
    <div className='w-full overflow-hidden font-["Outfit"]'>
  
   <Header/> 
   <About/>
   <Projects/>
    </div>
  )
}

export default App
