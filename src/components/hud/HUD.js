import React, { Component } from 'react';
import MOLE_CONTEXT from '../context/MoleContext';

class HUD extends Component {
    static contextType = MOLE_CONTEXT;
        
    render() {
        return (
            <div className="hud--wrap">
                <div className="hud--text hud--points">{this.context.points} points</div>
                <div className="hud--text hud--timer">{this.props.timer} seconds</div>
            </div>
        )
    }
}

export default HUD;