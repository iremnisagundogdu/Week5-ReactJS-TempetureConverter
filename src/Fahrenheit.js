import React, { Component } from 'react'

class Fahrenheit extends Component {
  
  render() {
    return (
      <div class="F">
        <h3> Fahrenheit  {this.props.Fahrenheit}</h3>
        
      </div>
    );
  }
}

export default Fahrenheit;