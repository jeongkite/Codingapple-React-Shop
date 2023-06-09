/* eslint-disable */
import './App.css';
import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'

import data from './data.js'

function App() {

  let [items] = useState(data)

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
        <Route path='/' element={
          <div>
            <div className='main-bg'></div>
            <br />
            <div className="container">
              <div className="row">
                {
                  items.map(function (item, i) {
                    return (
                      <Card item={item} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        } />
        <Route path='/detail' element={<div>상세페이지다,,~ 이마리야!!</div>} />
        <Route path='/about' element={<div>어바웃입니다 여기는 쿠쿠루삥뽕빵</div>} />
      </Routes>

      <br />

      <Button variant="primary">Primary</Button>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'/present' + (props.item.id + 1) + '.jpeg'} width="80%" />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </div>
  )
}

export default App;
