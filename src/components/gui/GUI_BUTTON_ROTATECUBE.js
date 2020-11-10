import React, { Component } from 'react';
import MOLE_CONTEXT from '../context/MoleContext';

class GUI_BUTTON_ROTATECUBE extends Component{
    static contextType = MOLE_CONTEXT;

    moleCheck = () => {
        if (!this.props.num) return false;
        return this.context.moleLayout[this.context.faces[this.props.id]].moles.filter( m => !this.context.moles[m].burrowed ).length > 0
    }

    moleNotification = () => {
        if ( !this.moleCheck() ) return;
        return (
            <div className="mole--dot"></div>
        )
    }

    render(){
        return(
            <li className={(this.props.face === this.context.faces[this.props.id] ? "gui--button--selected" : "")}>
                <button 
                    onClick={()=>this.props.handleButtonClick(`${this.props.num}`)}
                    onTouchStart={()=>this.props.handleButtonClick(`${this.props.num}`)}
                >
                    {this.moleNotification()}
                </button>
            </li>
        )
    }
}

export default GUI_BUTTON_ROTATECUBE;