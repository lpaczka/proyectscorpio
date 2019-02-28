import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import Form from './components/Formulario'
import Navbar from './components/Navbar'
import Postear from './components/Postear'
import Login from './components/Login'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar/>
        <main>
          <Route exact path = "/register" component={Form} />
          <Route exact path = "/" component={Postear} />
          <Route exact path = "/login" component={Login} />
        </main>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
