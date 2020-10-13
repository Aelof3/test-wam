import React from 'react';
import { Route } from 'react-router-dom';
import Cube from './components/cube/Cube';
import MainMenu from './components/MainMenu';
import GUI from './components/gui/GUI';
import MoleObject from './js/MoleObject';

class App extends React.Component {
  state = { 
    faces: ['front','right','left','top','bottom','back'],
    face: 'front',
    menu: true,
    moles: [],
    step: false
  }

  handleEvent = (num) => {
    if ( ["1","2","3","4","5","6"].includes(num) ) this.handleNumkeyPress(num);
  }

  handleNumkeyPress = (key) => {
    this.setState({
      face: this.state.faces[parseInt(key) - 1]
    })
  }

  stepSequence = ( ) => {
    // create sequence to randomly pop moles up
    const burrowedMoles = this.state.moles.filter( mole => mole.burrowed ).map( mole => mole.i );
    const n = this.getRandomInt(0,burrowedMoles.length - 1);
    const m = burrowedMoles[n];
    this.state.moles[m].popUp();
    this.setState({
      step: !this.state.step
    })
  }
  
  getRandomInt = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  createMoles = ( ) => {
    // create 54 mole objects, one for each block
    const moles = Array.from( { length: 54 }, ( m, i ) => new MoleObject( i ) )
    this.setState({
      moles
    });
  }

  componentDidMount(){
    this.createMoles();
    document.body.classList.add("mainmenu--body")
    window.addEventListener("keydown", (e)=>{this.handleEvent(e.key)}, false);
    this.setState({
      interval: setInterval( ()=>{
        this.stepSequence();
      },2000)
    })
  }

  render(){
    return (
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
                    cubeFace={this.state.face} 
                    style={this.state.style}
                    moles={this.state.moles}
                    /> } />
          <Route 
            exact 
            path="/app" 
            render={()=><GUI handleButtonClick={this.handleEvent} face={this.state.face} />}
          />
      </div>
    );
  }
}

export default App;