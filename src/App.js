import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

import VendingMachine from './VendingMachine';
import Chips from "./Chips";
import Skittles from "./Skittles";
import Cakes from "./Cakes";


function App() {
  return (
    <main className="App">
        <nav className="snacks">
          <Link to="/">Home</Link>
          <Link to="/chips">Chips</Link>
          <Link to="/skittles">Skittles</Link>
          <Link to="/cakes">Cakes</Link>
        </nav>
        <Route exact path="/">
            <VendingMachine />
        </Route>
        <Route exact path="/chips">
            <Chips />
        </Route>
        <Route exact path="/skittles">
            <Skittles />
        </Route>
        <Route exact path="/cakes">
            <Cakes />
        </Route>
    </main>
  );
}

export default App;
