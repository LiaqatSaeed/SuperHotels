import React from 'react';
import './App.css';
import { Container, } from "reactstrap"
import Navigation from './layout';
import { Hotels } from './screens/hotels';
import { Auth } from './context/auth.context';
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <Auth>
      <Container className="App">
        <Navigation />
        <BrowserRouter>
          <Route exact path="/" component={Hotels} />
        </BrowserRouter>
      </Container>
    </Auth>
  );
}

export default App;
