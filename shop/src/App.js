/* eslint-disable */
import './App.css';
import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'

import MainPage from './Components/Main';
import DetailPage from './Components/Detail';

function App() {

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/detail' element={ <DetailPage /> } />
        <Route path='/about' element={<div>어바웃입니다 여기는 쿠쿠루삥뽕빵</div>} />
      </Routes>

    </div>
  );
}


export default App;
