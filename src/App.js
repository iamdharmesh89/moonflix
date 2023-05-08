import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TvSection from './components/TvSection';
import Movies from './pages/Movies';
import Liked from './pages/Liked';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Player from './components/Player';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
        <Route index element={<Home />} />
          <Route path="tv" element={<TvSection/>}/>
          <Route path="movie" element={<Movies/>}/>
          <Route path="liked" element={<Liked/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="player" element={<Player/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
