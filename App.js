import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      red   : 0,
      green : 0,
      blue  : 0
    };

    this.update = this.update.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.redInput);
  }

  update(e) {
    this.setState( { 
      red: ReactDOM.findDOMNode(this.redInput).value,
      green: ReactDOM.findDOMNode(this.greenInput).value,
      blue: ReactDOM.findDOMNode(this.blueInput).value
    });

 }

 render() {
  return (
    <div>
    {this.state.txt}
    <hr />
    <Slider ref={(rInput) => { this.redInput = rInput; }}    update={ this.update }/>
    {this.state.red}
    <Slider ref={(gInput) => { this.greenInput = gInput; }}  update={ this.update }/>
    {this.state.green}
    <Slider ref={(bInput) => { this.blueInput = bInput; }}   update={ this.update }/>
    {this.state.blue}
    </div>
    );
}
}

class Slider extends React.Component {
  render() {
    return (
      <input type="range"
      min="0"
      max="255"
      value="128"
      onChange={ this.props.update } />
      );
  }
}

export default App
