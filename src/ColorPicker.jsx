import React, { Component } from 'react';


class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPicker: null,
    };  
  }
  getColor = title => {
    this.setState({
      colorPicker: title,   
    });
    
}
  reset = () => this.getColor(null);
render() {
  return (
  <div>
  <div className="picker__title">{this.state.colorPicker}</div>
  <div>
    <button 
    className="picker__button picker__button_coral"
    onMouseEnter={() => this.getColor('Coral')} onMouseLeave={this.reset}
    >
    
    </button>
    <button 
    className="picker__button picker__button_aqua"
    onMouseEnter={() => this.getColor('Aqua')} onMouseLeave={this.reset}
    
    >
    </button>
    <button className="picker__button picker__button_bisque"
    onMouseEnter={() => this.getColor('Bisque')} onMouseLeave={this.reset}
    >
    </button>
  </div>
  </div>
  );
}
}

export default ColorPicker;