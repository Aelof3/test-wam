import React, { Component } from 'react';
import MOLE_CONTEXT from '../context/MoleContext';

class Mole extends Component {
    static contextType = MOLE_CONTEXT;

    render(){
        const c = this.props.mole.bonked ? "bonked" : "poppedup";
        const b = this.props.mole.burrowed && !this.props.mole.bonked;
        return (
            <div className="mole">
                <div alt="img" className={ b ? "mole--sprite":`mole--sprite ${c}` }></div>
            </div>
        )
    }
}

export default Mole;