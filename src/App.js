import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home/Home";
import { Settings } from "./settings/Settings";
import { NoMatch } from "./components/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route component={NoMatch} />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
