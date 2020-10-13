import React, { Component } from 'react';
import MOLE_CONTEXT from '../context/MoleContext';

class Mole extends Component {
    static contextType = MOLE_CONTEXT;

    render(){
        const c = !this.props.mole.burrowed && this.props.mole.bonked ? "bonked" : "poppedup";
        return (
            <div className="mole">
                <div alt="img" className={ this.props.mole.burrowed ? "mole--sprite":`mole--sprite ${c}` }></div>
            </div>
        )
    }
}

export default Mole;