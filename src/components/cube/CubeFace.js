import React, { Component } from 'react';

class CubeFace extends Component {
    render() {
        return (
            <div className={`cube__face cube__face--${this.props.face}`}>
                <div className="cube__face--section">1</div>
                <div className="cube__face--section">2</div>
                <div className="cube__face--section">3</div>
                <div className="cube__face--section">4</div>
                <div className="cube__face--section">5</div>
                <div className="cube__face--section">6</div>
                <div className="cube__face--section">7</div>
                <div className="cube__face--section">8</div>
                <div className="cube__face--section">9</div>
            </div>            
        )
    }
}

export default CubeFace;