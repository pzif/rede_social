import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Post from './pages/Post';
import Login from './pages/Login.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/post" component={Post} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
