import { useState } from 'react'

import Nav from './Components/Nav'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage'

function App() {
  return (
    <div className='base'>
      <Nav/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App
