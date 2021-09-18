import React from 'react';
import './App.css';
import { Container, } from "reactstrap"
import Navigation from './layout';
import { Hotels } from './screens/hotels';
import { Auth } from './context/auth.context';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './reducer/configureStore';

function App() {
  return (
    <Auth>
      <Container className="App">
        <Navigation />
        <BrowserRouter>
          <Provider store={store}>
            <Route exact path="/" component={Hotels} />
          </Provider>
        </BrowserRouter>
      </Container>
    </Auth>
  );
}

export default App;
