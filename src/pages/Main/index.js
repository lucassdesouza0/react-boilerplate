import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {main} from "../../store/ducks/main"

import SlideScreen from "../Slide"

import Button from '@material-ui/core/Button';

class Main extends PureComponent {

  componentDidMount() {
    this.props.main()
  }

  render() {

    return (
      <div>
        <SlideScreen></SlideScreen>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ main }, dispatch);

const mapStateToProps = state => {
  return {
  };
};

// Decorator para Redux Form
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
