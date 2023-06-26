import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useState } from 'react';
import { Auth } from './components/Auth/Auth.js';
import { Navbar } from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar setUser={setUser} user={user} />
      <Routes>
        <Route exact path='/' element={user ? <Home user={user} /> : <Navigate to="/auth" />} />
        <Route exact path='/auth' element={!user ? <Auth /> : <Navigate to='/' />} />
        <Route exact path='/home' element={<Home user={user}  />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}