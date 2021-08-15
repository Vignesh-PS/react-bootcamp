import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/home";
import Aboutpage from "./pages/Aboutpage/about";

class App extends Component {
  storeDetails: any = {};

  constructor(props: any) {
    super(props);
    this.storeDetails.storeName = "My Store";
  }

  render() {
    return (
      <div>
        <div className="page-title">
          <h2>My Bootcamps</h2>
        </div>

        <Router>
          <div className="page-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>

          <div>
            <Route path="/" exact>
              <Homepage />
            </Route>

            <Route path="/about">
              <Aboutpage />
            </Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
