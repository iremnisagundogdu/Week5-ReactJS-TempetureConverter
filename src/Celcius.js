import React, { Component } from 'react'

class Celcius extends Component {
  
  render() {
    return (
      <div class="C"> 
        <h3> Celcius  {this.props.Celcius} </h3>
      </div>
    );
  }
}

export default Celcius;