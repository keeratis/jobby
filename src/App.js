import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";

// component
import Navbars from "./components/navbars";
import Login from "./components/login";
import Select from "./components/select";
import Studentregister from "./components/register_student";
import Companyregister from "./components/register_company";
import Home from "./components/home";

//css
import "./App.css";

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <Router>
        <div>
          <Navbars />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/select" component={Select} />
          <Route exact path="/student_register" component={Studentregister} />
          <Route exact path="/company_register" component={Companyregister} />
        </div>
      </Router>
      // </Provider>
    );
  }
}

export default App;
