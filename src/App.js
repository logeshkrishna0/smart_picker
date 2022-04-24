import React from 'react';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)

const history = createHistory();
function App() {

  return (
    <Authenticator>
      <div className="App">
        <Router history={history}>
          <Navbar bg="primary" expand="lg" variant="dark" >
            <Navbar.Brand href="/">Image Gallery App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/uploadImage">Upload Image</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* <Route path="/" exact component={HomePage} />
          <Route path="/uploadImage" exact component={UploadImage} /> */}

        </Router>
      </div>
    </Authenticator>
  );
}

export default App;
