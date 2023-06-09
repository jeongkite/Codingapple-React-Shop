/* eslint-disable */
import './App.css';
import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

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

      <div className='main-bg'></div>

      <br />

      <div className="container">
        <div className="row">
          {
            items.map(function (item, i) {
              return (
                <Card item={item}/>
              )
            })
          }
        </div>
      </div>

      <br />

      <Button variant="primary">Primary</Button>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'/present'+(props.item.id + 1)+'.jpeg'} width="80%" />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </div>
  )
}

export default App;
