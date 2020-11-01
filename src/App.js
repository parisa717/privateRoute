import "./App.css";
import {useState} from 'react'
import { Link, Route, Switch } from "react-router-dom";
import Home from "./home";
import About from "./About";
import UserContextProvider from "./UserContext";
import PrivateRoute from "./PrivateRoute";
import Nav from "./Nav";
import Signin from "./signin";
import Loggedout from "./loggedout";
import Dashboard from "./dashboard";

function App() {
  
  return (
    <UserContextProvider >
     <Nav />
      <Switch>
       
          <Route exact path="/home" component={Home} />
          <Route exact path='/signin' component={Signin}/>
          <Route exact path='/loggedout' component={Loggedout}/>

          <PrivateRoute exact path="/about" component={About} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
     
      </Switch>
      </UserContextProvider>
  );
}

export default App;
