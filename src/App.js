import React from 'react';
import './App.css';
import Cube from './components/cube/Cube';

class App extends React.Component {
  state = {
    mouseMoveEnable: false,
    mouseMoving: false,
    delay: 100,
    coords: {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    },
    rotation: {
      x:0,
      y:0
    },
    style: {
      transform: `translateZ(calc(-0.5 * var(--d) )) rotateX(0deg) rotateY(0deg)`
    },
    faces: ['front','right','left','top','bottom','back'],
    face: 'front'
  }

  handleKeyDown = (e) => {
    if ( e.key === "Control" ) {
      this.setState({
        mouseMoveEnable: true
      });
    }
    console.log(e.key)
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

  handleMouseMove = (e) => {
/* 
    need to prevent this from running over itsself
*/
    if ( !this.state.mouseMoveEnable ) return;

    const eX = e.pageX;
    const eY = e.pageY;

    if ( !this.state.mouseMoving ) {

      this.setState({
        coords: {
          x: eX,
          y: eY,
        },
        mouseMoving: true
      })
    } else {

      const xDiff = eX - this.state.coords.x;
      const yDiff = this.state.coords.y - eY;

      const newRotX = this.state.rotation.x + yDiff / 2;
      const newRotY = this.state.rotation.y + xDiff / 2;

      this.setState({
        coords: {
          x: eX,
          y: eY,
        },
        rotation:{
          x: newRotX,
          y: newRotY
        },
        style: {
          transform: `translateZ(calc(-0.5 * var(--d) )) rotateX(${newRotX}deg) rotateY(${newRotY}deg)`
        }
      });
    }

  }

  handleTouchEnd = (e) => {
    this.setState({
      mouseMoveEnable: false,
      mouseMoving: false
    });
  }

  handleTouchMove = (e) => {
    const eX = e.changedTouches[0].pageX;
    const eY = e.changedTouches[0].pageY;

    if ( !this.state.mouseMoving ) {

      this.setState({
        coords: {
          x: eX,
          y: eY,
        },
        mouseMoving: true
      })
    }

    const xDiff = eX - this.state.coords.x;
    const yDiff = this.state.coords.y - eY;

    const newRotX = this.state.rotation.x + yDiff;
    const newRotY = this.state.rotation.y + xDiff;

    this.setState({
      coords: {
        x: eX,
        y: eY,
      },
      rotation:{
        x: newRotX,
        y: newRotY
      },
      style: {
        transform: `translateZ(calc(-0.5 * var(--d) )) rotateX(${newRotX}deg) rotateY(${newRotY}deg)`
      }
    });

  }

  componentDidMount(){
    window.addEventListener("keydown", (e)=>{this.handleKeyDown(e)}, false);
    window.addEventListener("keyup", (e)=>{this.handleKeyUp(e)}, false);
    window.addEventListener("mousemove", (e)=>{this.handleMouseMove(e)}, false);
    window.addEventListener("touchmove", (e)=>{this.handleTouchMove(e)}, false);
    window.addEventListener("touchend", (e)=>{this.handleTouchEnd(e)}, false);
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
