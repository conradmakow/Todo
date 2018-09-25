import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  _handleKeyPress(e) {
    if (e.which === 13) {
      this.props.handleToDoInput(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <input type="text" onKeyPress={this._handleKeyPress}></input>
    )
  }
}

export default Input;