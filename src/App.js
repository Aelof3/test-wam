import React from 'react';
import './App.css';
import Cube from './components/cube/Cube';

class App extends React.Component {
  state = { 
    faces: ['front','right','left','top','bottom','back'],
    face: 'front'
  }

  handleKeyDown = (e) => {
    if ( ["1","2","3","4","5","6"].includes(e.key) ) this.handleNumkeyPress(e.key);
  }

  handleNumkeyPress = (key) => {
    this.setState({
      face: this.state.faces[parseInt(key) - 1]
    })
  }
  
  handleKeyUp = (e) => {
    if ( e.key === "Control" ) {
      this.setState({
        mouseMoveEnable: false,
        mouseMoving: false
      });
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", (e)=>{this.handleKeyDown(e)}, false);
    window.addEventListener("keyup", (e)=>{this.handleKeyUp(e)}, false);
  }

  render(){
    return (
      <div className="App" tabIndex={-1}>
        <div className="scene">
          <Cube cubeFace={this.state.face} style={this.state.style}/>
        </div>
      </div>
    );
  }
}

export default App;
