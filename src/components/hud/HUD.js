import React, { Component } from 'react';
import MOLE_CONTEXT from '../context/MoleContext';

class HUD extends Component {
    static contextType = MOLE_CONTEXT;
    state = {
        style: {
            width: `${this.context.points}%`,
            color: "#fff",
            background: "#fff"
        }
    }
    render() {
        return (
            <div className="hud--wrap">
                <div className="hud--points">
                    <div style={{
                        width: `${this.context.points}%`,
                        /* width: "100%", */
                        color: "#fff",
                        backgroundColor: `rgb(${255 - (this.context.points * 2.55)},${this.context.points * 2.55},0)`,
                    }}></div>
                </div>
                {/* <progress style={this.state.style} className="hud--text hud--points" value={this.context.points} max="100">{this.context.points} points</progress> */}
                <div className="hud--timer">
                    <div>{this.props.timer} seconds</div>
                </div>
            </div>
        )
    }
}

export default HUD;