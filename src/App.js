import React from 'react';
import './App.css';
import Welcome from './views/Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Types from './views/Types';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/types' component={Types} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
