import React from "react";
import './App.css';
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home/Home";
import { Tags } from "./tags/Tags";
import { NoMatch } from "./components/NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";



function App() {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tags" component={Tags} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Container>

    </div>

  );
}

export default App;
