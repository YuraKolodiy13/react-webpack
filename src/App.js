import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import './App.css';

const App = () => (
  <div className='container'>
    <h1>Hello React</h1>
    <p>Minimal React configuration.</p>

    <p>wrong</p>
    <p>wrong</p>
    <p>wrong</p>
    <p>fdsgfd</p>


    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
      </Switch>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
