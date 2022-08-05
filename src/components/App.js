import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Layout from './Layout.js';
import Home from '../pages/Home.js'
import NotFound from '../pages/NotFound.js';


class App extends Component {

  render() {
    return (
      <div className="v_light" data-spy="scroll" data-offset="110">
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
