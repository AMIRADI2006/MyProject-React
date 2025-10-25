import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import PopularCategory from './components/main/Popular Category/Popular Category'
import NewestJobs from './components/main/Newest Jobs/Newest Jobs'
import StepstoYour from './components/main/Steps to Your'
import TopCompanies from './components/main/Top companies'
import OurAchievements from './components/main/Our Achievements'
import OurBlog from './components/main/Our Blog'
import Baner from './components/main/baner'
import Footer from './components/footer/Footer'

// import data from './data/data.js'

function App() {
  const [count, setCount] = useState(0)
  var Note ={
    name : 'Amir Mohammad'
  }
  return (
    <>
      <Header name={Note.name}/>
      <main>
        <PopularCategory/>
        <NewestJobs/>
        <StepstoYour/>
        <TopCompanies></TopCompanies>
        <OurAchievements></OurAchievements>
        <OurBlog></OurBlog>
        <Baner></Baner>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
