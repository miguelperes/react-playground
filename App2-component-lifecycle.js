import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = { clickCount: 0 };
    this.update = this.update.bind(this);
  }

  // Set any state before the component shows up (before render phase)
  componentWillMount() {
    console.log('- Component Will Mount');
  }

  componentDidMount() {
    console.log('- Component Did Mount');
    this.inc = setInterval(this.update, 500);
  }

  // Clean up any processes that might been running (changing state of an unmounted component)
  componentWillUnmount() {
    console.log('- Component Will Unmount');
    clearInterval(this.inc);
  }

  update() {
    this.setState( (prevState, props) => ({
      clickCount: prevState.clickCount + 1
    }))
  }

  render() {
    console.log('- Render');
    return <button onClick={this.update}>Click Count: {this.state.clickCount}</button>
  }
}



class Wrapper extends React.Component {
  constructor() {
    super();

    this.mountComponent   = this.mountComponent.bind(this);
    this.unmountComponent = this.unmountComponent.bind(this);
  }

  mountComponent() {
    ReactDOM.render(<App />, document.getElementById('displayComponent'));
  }

  unmountComponent() {
    ReactDOM.unmountComponentAtNode( document.getElementById('displayComponent'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mountComponent}>Mount Component</button>
        <button onClick={this.unmountComponent}>Unmount Component</button>
        <div id="displayComponent"></div>
      </div>
      );
  }

}



export default Wrapper
