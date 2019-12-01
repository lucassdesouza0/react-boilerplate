import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {main} from "../../store/ducks/main"

import { Slide } from 'react-slideshow-image';

const slideImages = [
  '../../assets/slide_1.png',
  '../../assets/slide_2.png',
  '../../assets/slide_3.png',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

class SlideScreen extends PureComponent {

  componentDidMount() {
    this.props.main()
  }

  render() {

    return (
      <div>
        <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ main }, dispatch);

const mapStateToProps = state => {
  return {
    teste: state.main.teste
  };
};

// Decorator para Redux Form
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlideScreen);
