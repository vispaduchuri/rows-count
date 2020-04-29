import React, { Component } from 'react';
import { render } from 'react-dom';
import Parent from './Parent';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
  <Parent/>
    );
  }
}

render(<App />, document.getElementById('root'));
