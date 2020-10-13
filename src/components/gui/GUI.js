import React, { Component } from 'react';
import GUI_BUTTON_ROTATECUBE from './GUI_BUTTON_ROTATECUBE';

class GUI extends Component {

    generateRotateButtons = () => {
        return ["1","2","3","4","5","6"].map( (num,i) => {
            return (
                <GUI_BUTTON_ROTATECUBE 
                    key={`${num}${i}`} 
                    id={i}
                    num={num}
                    handleButtonClick={this.props.handleButtonClick}
                    face={this.props.face}
                />
            )
        })
    }
    render() {
        return (
            <div className="gui--wrap">
                <ul>
                    {this.generateRotateButtons()}
                </ul>
            </div>
        )
    }
}

export default GUI;