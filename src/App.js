import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';

import { Home, Menu, Schedule, Events, News, Contact } from '\components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/events' component={Events} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
