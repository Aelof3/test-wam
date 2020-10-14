import React from 'react';
import { Route } from 'react-router-dom';
import Cube from './components/cube/Cube';
import MainMenu from './components/MainMenu';
import GUI from './components/gui/GUI';
import HUD from './components/hud/HUD';
import MOLE_CONTEXT from './components/context/MoleContext';
import MOLEPROVIDER from './components/context/MoleProvider';

class App extends React.Component {
  static contextType = MOLE_CONTEXT;

  state = { 
    faces: this.context.faces,
    face: 'front',
    menu: false,
    moles: this.context.moles,
    step: false,
  }

  handleEvent = (num) => {
    // this handles both keypresses and clicking the buttons
    if ( ["1","2","3","4","5","6"].includes(num) ) this.handleNumkeyPress(num);
  }

  handleNumkeyPress = (key) => {
    this.setState({
      face: this.state.faces[parseInt(key) - 1]
    })
  }

  popUpMole = (moles,m) => {
    moles[m].burrowed = false;
    this.setState({
      moles: moles
    });
    setTimeout( ()=>{
        moles[m].burrowed = true;
        this.setState({
          moles: moles
        });
    }, 7000 )
  }

  stepSequence = ( ) => {
    // create sequence to randomly pop moles up
    const burrowedMoles = this.state.moles.filter( mole => mole.burrowed ).map( mole => mole.i );
    const m = burrowedMoles[this.getRandomInt(0,burrowedMoles.length - 1)];
    const tempMoles = this.state.moles;
    this.popUpMole(tempMoles,m);
  }
  
  getRandomInt = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  gameStart = () => {
    this.setState({
      interval: setInterval( ()=>{
        this.stepSequence();
      },3000)
    })
  }

  menuSwitch = () => {
    if ( this.state.menu ) return;
    this.setState({menu: true})
  }

  componentDidMount(){
    document.body.classList.add("mainmenu--body")
    window.addEventListener("keydown", (e)=>{this.handleEvent(e.key)}, false);
  }

  componentWillUnmount(){
    clearInterval(this.state.interval);
  }

  render(){
    return (
      <MOLEPROVIDER
        faces={this.state.faces}
        textures={this.context.textures}
        moleLayout={this.context.moleLayout}
        moles={this.state.moles}
      >
        <div className="App" tabIndex={-1}>
            <Route 
              exact 
              path="/" 
              render={()=><MainMenu />} />
            <Route 
              exact 
              path="/app" 
              render={()=><Cube 
                      handleButtonClick={this.handleEvent} 
                      handleGameStart={this.gameStart}
                      cubeFace={this.state.face} 
                      style={this.state.style}
                      moles={this.state.moles}
                      /> } />
            <Route 
              exact 
              path="/app" 
              render={()=><GUI handleButtonClick={this.handleEvent} face={this.state.face} />}
            />
            <Route 
              exact 
              path="/app" 
              render={()=><HUD />}
            />
        </div>
      </MOLEPROVIDER>
    );
  }
}

export default App;