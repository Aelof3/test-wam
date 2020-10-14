import React from 'react';
import { Route } from 'react-router-dom';
import Cube from './components/cube/Cube';
import ModeSurvival from './components/gametypes/ModeSurvival';
import MainMenu from './components/MainMenu';
import GUI from './components/gui/GUI';
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

  componentDidMount(){
    document.body.classList.add("mainmenu--body")
    window.addEventListener("keydown", (e)=>{this.handleEvent(e.key)}, false);
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
              render={()=><ModeSurvival >
                  <Cube cubeFace={this.state.face} />
                  <GUI handleButtonClick={this.handleEvent} face={this.state.face} />
                </ModeSurvival> } />
        </div>
      </MOLEPROVIDER>
    );
  }
}

export default App;