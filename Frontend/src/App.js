import React from 'react';
import './App.css';
import Navbar from './Components/Screens/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Components/Screens/Home';
import Createpost from './Components/Screens/Createpost';
import Login from'./Components/Screens/Login';
import Signup from './Components/Screens/Signup';

import Blog from './Components/Screens/Blog';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/Home">
        <Home></Home>
      </Route>
      <Route path="/Createpost">
        <Createpost></Createpost>
      </Route>
      <Route path="/Login">
        <Login></Login>
      </Route>
      <Route path="/Signup">
        <Signup></Signup>
      </Route>
      <Route path="/Blog">
        <Blog></Blog>
      </Route>
      </Router>
    </div>
  );
}

export default App;
