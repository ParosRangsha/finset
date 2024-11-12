import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/Header'
import Banner from './assets/components/banner/Banner'
import Work from './assets/components/ourwork/Work'
import Project from './assets/components/projects/Project'
import Feature from './assets/components/feature/Feature'
import Review from './assets/components/review/Review'
import Question from './assets/components/question/Question'
import Quiry from './assets/components/quiry/Quiry'
import Blog from './assets/components/blog/Blog'

function App() {

  return (
    <>
     <Header/>
     <Banner/>
     <Work/>
     <Project/>
     <Feature/>
     <Review/>
     <Question/>
     <Quiry/>
     <Blog/>
    </>
  )
}

export default App
