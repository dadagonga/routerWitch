import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Kontakt from './Kontakt'
import Onama from './Onama'


function App() {

  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
          <Link to="/">Witch Home</Link>
        </li>
          <li>
            <Link to="/Onama">O nama</Link>
          </li>
          <li>
            <Link to="/Kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Onama" element={<Onama/>} />
      <Route path="Kontakt" element={<Kontakt/>} />
    </Routes>
    </>
  )
}

export default App
