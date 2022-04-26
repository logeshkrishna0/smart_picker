import React from 'react';
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Authenticator } from '@aws-amplify/ui-react'
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import '@aws-amplify/ui-react/styles.css'
import './App.css';
import HomePage from './Components/Homepage';
import UploadImage from './Components/uploadImage';
import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

const history = createHistory();

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <Router history={history}>
            <Navbar bg="primary" expand="lg" variant="dark" >
              <Navbar.Brand href="/">Image Gallery App</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/uploadImage">Upload Image</Nav.Link>
                  <button onClick={signOut}>Sign out</button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/uploadImage" element={<UploadImage />} />
            </Routes>
          </Router>
        )}
      </Authenticator>
    </div>


  );
}

export default App;
