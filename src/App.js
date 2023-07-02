import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import './App.css';
import Timer from './Components/timer';
import Dashboard from './Components/Dashboard';
import { Routes, Route } from 'react-router';
import Lab from './Components/Lab';

const App = () => {
  return (
    <Container className="app">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/lab' element={<Lab />} />
      </Routes>
    </Container>
  );
};

export default App;
