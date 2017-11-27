import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Modal from './components/Modal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  handleCloseModal = () => this.setState({ showModal: false })

  handleOpenModal = () => {
    if (!this.state.showModal) {
      this.setState({ showModal: true })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={this.handleOpenModal}>
          ShowModal
        </button>

        <Modal
          show={this.state.showModal}
          onClose={this.handleCloseModal}
        >
          <div>
            Modal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal Content
          </div>
        </Modal>
      </div>
    )
  }
}

export default App
