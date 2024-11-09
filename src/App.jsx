import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/Header'
import Banner from './assets/components/banner/Banner'
import Work from './assets/components/ourwork/Work'
import Project from './assets/components/projects/Project'

function App() {

  return (
    <>
     <Header/>
     <Banner/>
     <Work/>
     <Project/>
    </>
  )
}

export default App
