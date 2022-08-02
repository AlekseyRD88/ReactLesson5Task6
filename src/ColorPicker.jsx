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
  getColor(event) {
    this.setState({
      colorName: event.target.getAttribute("data-style-color"),   
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
  <div className="picker__title" onMouseEnter={() => this.getColor()} onMouseLeave={() => this.reset()}></div>
  <div>
    <button 
    className="picker__button picker__button_coral"
    data-style-color={CORAL}
    >
    </button>
    <button 
    className="picker__button picker__button_aqua"
    data-style-color={AQUA}
    
    >
    </button>
    <button className="picker__button picker__button_bisque"
    data-style-color={BISQUE}
    >
    </button>
  </div>
  </div>
  );
}
}

export default ColorPicker;