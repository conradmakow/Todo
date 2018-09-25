import React, { Component } from 'react';
import Input from './components/Input/Input';
import {List} from './components/List/List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  _handleToDoInput = (value) => {
    const items = this.state.items;
    items.push(value);
    this.setState({items: items});
  }

  render() {
    return (
      <div className="App">
        <div>TODO</div>
        <Input handleToDoInput={this._handleToDoInput}/>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;
