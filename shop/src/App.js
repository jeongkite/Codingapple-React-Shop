/* eslint-disable */
import './App.css';
import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

import MainPage from './Components/Main';
import DetailPage from './Components/Detail';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/features') }}>Features</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/about' element={<AbuoutPage />}>
          <Route path='member' element={<div>우리 회사 사람들...</div>} />
          <Route path='location' element={<div>우리 회사 위치...</div>} />
        </Route>
        <Route path='*' element={<div>잘못된 접근입니다.</div>} />
      </Routes>

    </div>
  );
}

function AbuoutPage() {
  return (
    <div>
      <h4>회사 정보 입니다</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
