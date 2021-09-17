import React from 'react';
import './App.css';
import { Container, } from "reactstrap"
import Navigation from './layout';
import { Hotels } from './screens/hotels';
import { Auth } from './context/auth.context';

function App() {
  return (
    <Auth>
      <Container className="App">
        <Navigation />
        <Hotels />

      </Container>
    </Auth>
  );
}

export default App;
