import React from "react";
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";



function App() {
  return (
      <Router>
        <Navigation/>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/:something" component={About} />

        </Switch>
        
        
      </Router>
  );
}

export default App;
