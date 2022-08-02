import React, { Component } from 'react';


class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPicker: '',
    };  
  }
  getColor() {
    this.setState({
      colorPicker: this.props['data-color'],   
    });
    
  }
  reset() {
    this.setState({
      colorPicker: '',
    });
}
render() {
  return (
  <div>
  <div className="picker__title"></div>
  <div>
    <button 
    className="picker__button picker__button_coral"
    data-color= "Coral"
    onMouseEnter={() => this.getColor()} onMouseLeave={() => this.reset()}
    >
    {this.state.colorPicker}
    </button>
    <button 
    className="picker__button picker__button_aqua"
    data-color= "Aqua"
    onMouseEnter={() => this.getColor()} onMouseLeave={() => this.reset()}
    
    >
    </button>
    <button className="picker__button picker__button_bisque"
    data-color= "Bisque"
    onMouseEnter={() => this.getColor()} onMouseLeave={() => this.reset()}
    >
    </button>
  </div>
  </div>
  );
}
}

export default ColorPicker;