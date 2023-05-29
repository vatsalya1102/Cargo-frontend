import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Auth } from './components/Auth/Auth.js';
import { Navbar } from './components/Navbar/Navbar.js'

export default function App() {

  return (
    <Router>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Auth />} />
      </Routes>
    </Router>
  )
}