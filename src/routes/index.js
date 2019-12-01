import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import ContactForm from "../components/contact/form/index";
import Main from "../pages/Main";

export default props => (
  <div>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Main} />      
      </Switch>
    </BrowserRouter>
  </div>
);
