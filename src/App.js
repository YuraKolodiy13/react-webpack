import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

const App = () => (
  <>
    <h1>Hello React</h1>
    <p>Minimal React configuration.</p>

    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
      </Switch>
    </BrowserRouter>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
