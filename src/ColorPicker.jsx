import React, { Component } from 'react';


class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: '',
    };  
  }
  getColor(event) {
    this.setState({
      colorName: event.getAttribute("data-style-color"),   
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
    data-style-color= 'coral'
    >
    </button>
    <button 
    className="picker__button picker__button_aqua"
    data-style-color= 'aqua'
    
    >
    </button>
    <button className="picker__button picker__button_bisque"
    data-style-color= 'bisque'
    >
    </button>
  </div>
  </div>
  );
}
}

export default ColorPicker;