import React, { Component } from 'react';
import MOLE_CONTEXT from './MoleContext';


class MOLEPROVIDER extends Component {
    state = {
        faces: this.props.faces,
        textures: this.props.textures,
        moleLayout: this.props.moleLayout,
        moles: this.props.moles,
        points: 0,
        popupDuration: 5000,
        popupInterval: 1000,
        prefaceClass: true
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

    popUpMole = (moles,m) => {
        moles[m].burrowed = false;
        this.setState({
        moles: moles
        });
        setTimeout( ()=>{
            moles[m].burrowed = true;
            this.setState({
            moles: moles
            });
        }, this.state.popupDuration )
    }

    stepSequence = ( ) => {
        // create sequence to randomly pop moles up
        const burrowedMoles = this.state.moles.filter( mole => mole.burrowed ).map( mole => mole.i );
        const m = burrowedMoles[this.getRandomInt(0,burrowedMoles.length - 1)];
        const tempMoles = this.state.moles;
        this.popUpMole(tempMoles,m);
    }
    
    getRandomInt = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    gameStart = () => {
        this.setState({
            prefaceClass: false,
            interval: setInterval( ()=>{
                this.stepSequence();
            },this.state.popupInterval)
        })
    }

    gameEnd = () => {
        clearInterval( this.state.interval );
    }

    render(){
        return (
            <MOLE_CONTEXT.Provider value={{
                ...this.state,
                bonkMole: this.bonkMole,
                gameStart: this.gameStart,
                gameEnd: this.gameEnd,
            }}>
                {this.props.children}
            </MOLE_CONTEXT.Provider>
        )
    }
}

export default MOLEPROVIDER;