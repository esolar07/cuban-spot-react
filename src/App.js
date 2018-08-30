import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Home from './containers/Home'
// import Menu  from './containers/Menu'
// import Schedule from './containers/Schedule'
// import Events from './containers/Events'
// import News from './containers/News'
// import Contact from './containers/Contact'


const App= () => (
  <Router>
    <div className="App">
      <Header />
      <Route exact path='/' render={() => <Home />} />
      {/* <Route path='/menu' render={ () => <Menu />} />
      <Route path='/schedule' render={() => <Schedule />} />
      <Route path='/events' render={() => <Events />} />
      <Route path='/news' render={() => <News />} />
      <Route path='/contact' render={() => <Contact />} /> */}
    </div>
  </Router>
);


export default App;
