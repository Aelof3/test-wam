import React, { Component } from 'react';

class CubeFace extends Component {
    render() {
        return (
            <div class={`cube__face cube__face--${this.props.face}`}>
                <div class="cube__face--section">1</div>
                <div class="cube__face--section">2</div>
                <div class="cube__face--section">3</div>
                <div class="cube__face--section">4</div>
                <div class="cube__face--section">5</div>
                <div class="cube__face--section">6</div>
                <div class="cube__face--section">7</div>
                <div class="cube__face--section">8</div>
                <div class="cube__face--section">9</div>
            </div>            
        )
    }
}

export default CubeFace;