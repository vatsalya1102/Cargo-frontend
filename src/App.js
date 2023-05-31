import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Auth } from './components/Auth/Auth.js';
import { Navbar } from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js';

export default function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={user ? <Home user={user} /> : <Navigate to="/auth" />} />
        <Route exact path='/auth' element={!user ? <Auth /> : <Navigate to='/' />} />
        <Route exact path='/home' element={<Home user={user}  />} />
      </Routes>
    </Router>
  )
}