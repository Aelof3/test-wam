import React from 'react';
import './App.css';
import Cube from './components/cube/Cube';

class App extends React.Component {
  render(){
    return (
      <div className="App scene">
        <Cube />
        <div class="mousecoords">Rotate Cube: [ctrl + move mouse]</div>
      </div>
    );
  }
}

export default App;
