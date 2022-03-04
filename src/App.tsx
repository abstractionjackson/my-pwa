import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import Nav from './components/Nav';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Workout from './containers/Workout';

function App() {
  const links = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/workout',
      label: 'Workout'
    },
    {
      href: '/profile',
      label: 'Profile'
    },
  ]
  return (
    <Router>
      <Layout>
      <Nav links={links} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workout' element={<Workout />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
