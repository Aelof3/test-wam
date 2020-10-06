import React, { Component } from 'react';

class GUI extends Component {
    render() {
        return (
            <div className="gui--wrap">
                <ul>
                    <li><button onClick={()=>this.props.handleButtonClick("1")}>1</button></li>
                    <li><button onClick={()=>this.props.handleButtonClick("2")}>2</button></li>
                    <li><button onClick={()=>this.props.handleButtonClick("3")}>3</button></li>
                    <li><button onClick={()=>this.props.handleButtonClick("4")}>4</button></li>
                    <li><button onClick={()=>this.props.handleButtonClick("5")}>5</button></li>
                    <li><button onClick={()=>this.props.handleButtonClick("6")}>6</button></li>
                </ul>
            </div>
        )
    }
}

export default GUI;