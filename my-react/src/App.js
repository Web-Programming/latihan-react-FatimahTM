import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Product from './Product';
import Registrasi from './Registrasi';
import routes from './route';
import React  from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Suspense fallback={<div>Loading .....</div>}>
      <div className='App'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            </div>

            <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/product" className="nav-link">
              Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link"> 
              Registrasi
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="main">
        <Routes>
          {routes.map((route, i) => {
            const { path, Component } = route;
            return
             <Route key={i} path={path} element={<Component />} />;
          })}
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;