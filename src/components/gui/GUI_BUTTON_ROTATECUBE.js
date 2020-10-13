import React, { Component } from 'react';

class GUI_BUTTON_ROTATECUBE extends Component{
    render(){
        const faces = ['front','right','left','top','bottom','back'];
        return(
            <li className={(this.props.face === faces[this.props.id] ? "gui--button--selected" : "")}>
                <button 
                    onClick={()=>this.props.handleButtonClick(`${this.props.num}`)}
                >
                    {/* {this.props.num} */}
                </button>
            </li>
        )
    }
}

export default GUI_BUTTON_ROTATECUBE;