import React from 'react';
import './App.css';
import Cube from './components/cube/Cube';
import MainMenu from './components/MainMenu';

class App extends React.Component {
  state = { 
    faces: ['front','right','left','top','bottom','back'],
    face: 'front',
    menu: true
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

  handleStartButton = (e) => {
    e.preventDefault();
    document.body.classList.remove("mainmenu--body")
    this.setState({
      menu: false
    });
  }

  componentDidMount(){
    document.body.classList.add("mainmenu--body")
    window.addEventListener("keydown", (e)=>{this.handleKeyDown(e)}, false);
    window.addEventListener("keyup", (e)=>{this.handleKeyUp(e)}, false);
  }
  
  renderAppStage = () => {
    if ( this.state.menu ) {
      return <MainMenu handleStartButton={this.handleStartButton}/>
    }
    return <Cube cubeFace={this.state.face} style={this.state.style}/> 
  }

  render(){
    
    return (
      <div className="App" tabIndex={-1}>
          {this.renderAppStage()}
      </div>
    );
  }
}

export default App;
