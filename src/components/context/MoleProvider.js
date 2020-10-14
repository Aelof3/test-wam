import React, { Component } from 'react';
import MOLE_CONTEXT from './MoleContext';


class MOLEPROVIDER extends Component {
    state = {
        faces: this.props.faces,
        textures: this.props.textures,
        moleLayout: this.props.moleLayout,
        moles: this.props.moles,
        points: 0
    }
    bonkMole = (mole) => {
        const p = mole.burrowed || mole.bonked ? 0 : 1;
        const moles = this.state.moles.map( m => {
            if ( m.i !== mole.i ) return m;
            m.bonked = true;
            return m;
        } );
        this.setState({
            moles: moles,
            points: this.state.points + p
        });

        setTimeout( ()=>{
            const molesAfter = this.state.moles.map( m => {
                if ( m.i !== mole.i ) return m;
                m.bonked = false;
                m.burrowed = true;
                return m;
            } );
            this.setState({
                moles: molesAfter
            });
        }, 500 )
    }
    render(){
        return (
            <MOLE_CONTEXT.Provider value={{
                ...this.state,
                bonkMole: this.bonkMole
            }}>
                {this.props.children}
            </MOLE_CONTEXT.Provider>
        )
    }
}

export default MOLEPROVIDER;