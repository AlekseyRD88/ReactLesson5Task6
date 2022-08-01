import React, { Component } from 'react';
const CORAL = '#FF7F50';
const AQUA = '#00FFFF';
const BISQUE = '#FFE4C4';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: '',
    };  
  }
  getBackground() {
    this.setState({
      colorName: this.style.backgroundColor,   
    });
    
  }
  reset() {
    this.setState({
      colorName: '',
    });
}
render() {
  return (
  <div>
  <div className="picker__title" onMouseLeave={() => this.reset()}></div>
  <div>
    <button 
    className="picker__button picker__button_coral"
    style={{
      backgroundColor: CORAL,
    }}
    onMouseEnter={() => this.getBackground()}>
    </button>
    <button 
    className="picker__button picker__button_aqua"
    style={{
      backgroundColor: AQUA,
    }}
    onMouseEnter={() => this.getBackground()}>
    </button>
    <button className="picker__button picker__button_bisque"
    style={{
      backgroundColor: BISQUE,
    }}
    onMouseEnter={() => this.getBackground()}>
    </button>
  </div>
  </div>
  );
}
}

export default ColorPicker;