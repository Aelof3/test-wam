import React, { Component } from 'react';
import MOLE_CONTEXT from './MoleContext';


class MOLEPROVIDER extends Component {
    state = {
        faces: this.props.faces,
        textures: this.props.textures,
        moleLayout: this.props.moleLayout,
        moles: this.props.moles,
    }
    bonkMole = (mole) => {
        const moles = this.state.moles.map( m => {
            if ( m.i !== mole.i ) return m;
            m.bonked = true;
            return m;
        } );
        this.setState({
            moles
        });
        console.log( mole.i, "bonked!")

        setTimeout( ()=>{
            const molesAfter = this.state.moles.map( m => {
                if ( m.i !== mole.i ) return m;
                m.bonked = false;
                return m;
            } );
            this.setState({
                molesAfter
            });
            console.log( mole.i, "bonk-gone")
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