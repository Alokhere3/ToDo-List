import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/header'
import Input from './assets/components/input'
import Task from './assets/components/task'

function App() {


  return (
    <>
 <div className="cont">
  <Header/>
  <Input/>
 </div>
    </>
  )
}

export default App
