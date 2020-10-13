import React, { Component } from 'react';

class Mole extends Component {
    render(){
        return (
            <div className="mole">
                <div alt="img" className={ this.props.mole.burrowed ? "mole--sprite":"mole--sprite poppedup" }></div>
            </div>
        )
    }
}

export default Mole;