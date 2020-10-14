import React, { Component } from 'react';
import MOLE_CONTEXT from '../context/MoleContext';

class HUD extends Component {
    static contextType = MOLE_CONTEXT;
        
    render() {
        return (
            <div className="hud--wrap">
                <p className="hud--points">{this.context.points} points</p>
            </div>
        )
    }
}

export default HUD;