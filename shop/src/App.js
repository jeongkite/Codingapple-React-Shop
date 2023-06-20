/* eslint-disable */
import './App.css';
import { useState, createContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'

import data from './data.js';
import MainPage from './Components/Main.js';
import DetailPage from './Components/Detail.js';

export let StockContext = createContext();

function App() {
  let [stock, setStock] = useState([1, 3, 9]);
  let [items] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <StockContext.Provider value={{ stock, items }}>
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
          <Route path='/detail/:itemId' element={<DetailPage items={items} />} />
          <Route path='/about' element={<AbuoutPage />}>
            <Route path='member' element={<div>우리 회사 사람들...</div>} />
            <Route path='location' element={<div>우리 회사 위치...</div>} />
          </Route>
          <Route path='event' element={<EventPage />}>
            <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
            <Route path='two' element={<div>생일기념 쿠폰 받기</div>} />
          </Route>
          <Route path='*' element={<div>잘못된 접근입니다.</div>} />
        </Routes>
      </StockContext.Provider>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트!</h4>
      <Outlet></Outlet>
    </div>
  )
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
