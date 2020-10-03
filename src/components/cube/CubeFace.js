import React, { Component } from 'react';
import moles from '../../moles';

class CubeFace extends Component {
    state = {
        moles: []
    }
    getRandomInt = (min,max) => {
        return Math.floor(Math.random() * max + min);
    }
    
    componentDidMount(){
        const numbers = Array(18).fill().map((_, index) => index);
        numbers.sort(() => Math.random() - 0.5);
    
        const moleList = numbers.slice(0,9);
        
        this.setState({
            moles: moleList.map( n => moles[n] )
        })
    }

    render() {
        return (
            <div className={`cube__face cube__face--${this.props.face}`}>
                <div className="cube__face--section">
                    <img alt="" src={`${this.state.moles[0]}`} />
                    <img alt="" src={`${this.state.moles[0]}`} />
                </div>
                <div className="cube__face--section">
                    <img alt="" src={`${this.state.moles[1]}`} />
                    <img alt="" src={`${this.state.moles[1]}`} />
                </div>
                <div className="cube__face--section">
                    <img alt="" src={`${this.state.moles[2]}`} />
                    <img alt="" src={`${this.state.moles[2]}`} />
                </div>
                <div className="cube__face--section">
                    <img alt="" src={`${this.state.moles[3]}`} />
                    <img alt="" src={`${this.state.moles[3]}`} />
                </div>
                <div className="cube__face--section">
                    <img alt="" src={`${this.state.moles[4]}`} />
                    <img alt="" src={`${this.state.moles[4]}`} />
                </div>
                <div className="cube__face--section">
                    <img alt="" src={`${this.state.moles[5]}`} />
                    <img alt="" src={`${this.state.moles[5]}`} />
                </div>
                <div className="cube__face--section">
                    <img alt="" src={`${this.state.moles[6]}`} />
                    <img alt="" src={`${this.state.moles[6]}`} />
                </div>
                <div className="cube__face--section">
                    <img alt="" src={`${this.state.moles[7]}`} />
                    <img alt="" src={`${this.state.moles[7]}`} />
                </div>
                <div className="cube__face--section">
                    <img alt="" src={`${this.state.moles[8]}`} />
                    <img alt="" src={`${this.state.moles[8]}`} />
                </div>
            </div>            
        )
    }
}

export default CubeFace;