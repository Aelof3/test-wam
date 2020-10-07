import React, { Component } from 'react';

class GUI_BUTTON_ROTATECUBE extends Component{
    render(){
        return(
            <li>
                <button 
                    onClick={()=>this.props.handleButtonClick(`${this.props.num}`)}
                >
                    {this.props.num}
                </button>
            </li>
        )
    }
}

export default GUI_BUTTON_ROTATECUBE;