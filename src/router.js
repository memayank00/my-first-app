import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import ViewUser from './components/ViewUser';


export const Router = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/viewUser">View User</Link></li>
      </ul>

      <hr/>

      <Route  path="/" exact={true} component={Home}/>
      <Route  path="/login" component={Login}/>
      <Route  path="/about" component={About}/>
      <Route  path="/contactUs" component={Contact}/>
      <Route  path="/dashboard" component={Dashboard}/>
      <Route  path="/viewUser" component={ViewUser}/>
      
      <hr/>

      <ul>
        <li><Link to="/contactUs">contactUs</Link></li>
        
      </ul>

    </div>
  </BrowserRouter>
);