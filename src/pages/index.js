import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AppRouter from "../routes";

class App extends Component 
{
  componentDidMount = () => {
  };

  render() {
    return <AppRouter />;
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
