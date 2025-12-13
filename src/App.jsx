import './App.css'
//Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Resume from './pages/Resume';
import Notification from './pages/Notification/Notification';
//

// import data from './data/data.js'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />        {/*صفحه اصلی */}
          <Route path="/company" element={<Company />} />         {/* Company صفحه*/}
          <Route path="/resume" element={<Resume/>} />         {/* resume صفحه*/}
          <Route path="/notification" element={<Notification/>} />         {/*Notification  صفحه*/}
        </Routes>
      </Router>    
    </>
  )
}

export default App
