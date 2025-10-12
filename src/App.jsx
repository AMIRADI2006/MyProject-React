import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import PopularCategory from './components/main/Popular Category'
import NewestJobs from './components/main/Newest Jobs'
import StepstoYour from './components/main/Steps to Your'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <PopularCategory></PopularCategory>
        <NewestJobs></NewestJobs>
        <StepstoYour></StepstoYour>

      </main>
    </>
  )
}

export default App
