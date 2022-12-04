import "./App.css";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature:0
    };
  }
  render() {
  return ( 
    <div Class="Nav">
      <h1>SICAKLIK BİRİM DÖNÜŞTÜRÜCÜ</h1>
      <p> 3 Birimde Sıcaklık </p>
      <button id="btn" onClick={()=> this.setState({temperature: this.state.temperature +1 })}>Sıcaklık Arttır</button>
      <button id="sonuc"> Şuan Sıcaklık: {this.state.temperature}</button>
      <Container>
        <Row>
          <Col xs="4">
            <Celcius Celcius={this.state.temperature}/>
          </Col>
          <Col xs="4">
            <Fahrenheit Fahrenheit={this.state.temperature *1.8+32} />
          </Col>
          <Col xs="4">
            <Kelvin Kelvin={this.state.temperature + 273} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
}
export default App;
