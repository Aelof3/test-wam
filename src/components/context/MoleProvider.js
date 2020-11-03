import React, { Component } from 'react';
import MOLE_CONTEXT from './MoleContext';
import sounds from '../../js/sounds';

class MOLEPROVIDER extends Component {
    state = {
        faces: this.props.faces,
        textures: this.props.textures,
        moleLayout: this.props.moleLayout,
        moles: this.props.moles,
        points: 0,
        popupDuration: 5000,
        popupInterval: 1000,
        moleCount: 100,
        prefaceClass: true,
        authtoken:null,
        current_song:0,
        songs: [
            new Audio(sounds.music[0]),
            new Audio(sounds.music[1])
        ],
        timer: 0,
        //RESTAPI: 'http://localhost:8000'
        RESTAPI: 'https://floating-crag-15121.herokuapp.com'
    }
    bonkMole = (mole,e) => {
        if (!e.isTrusted) return;
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
        
        if (!mole.burrowed && mole.bonked) {
            const b = this.getRandomInt(0,sounds.bonks.length - 1)
            const moleNoise = new Audio(sounds.bonks[b]);
            moleNoise.play();
        }
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
    handleClick = (e) => {
        e.preventDefault();
        this.props.history.replace('/');
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
    refreshToken = ( authtoken ) => {
        this.setState({
            authtoken
        })
    }
    stepSequence = ( ) => {
        // create sequence to randomly pop moles up
        const burrowedMoles = this.state.moles.filter( mole => mole.burrowed ).map( mole => mole.i );
        const m = burrowedMoles[this.getRandomInt(0,burrowedMoles.length - 1)];
        const tempMoles = this.state.moles;
        this.popUpMole(tempMoles,m);
    }

    setFinalTime = ( time ) => {
        this.setState({
            timer: time
        })
    }

    gameReset = () => {
        this.setState({
            points: 0,
            timer: 0
        });
    }
    
    playSong = (n=this.state.current_song) => {
        const s1 = this.state.songs[0];
        const s2 = this.state.songs[1];
        s1.loop = true;
        s2.loop = true;

        this.setState({
            songs:[s1,s2]
        })

        // if no music return here <--

        if (n !== this.state.current_song) {
            this.state.songs[0].pause();
            this.state.songs[1].pause();

            this.state.songs[n].play();
        } else if (this.state.songs[n].paused){
            this.state.songs[n].play();
        }

        this.setState({
            current_song: n
        })
    }

    getRandomInt = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    gameStart = () => {
        this.playSong(1);
        this.setState({
            prefaceClass: false,
            interval: setInterval( ()=>{
                this.stepSequence();
            },this.state.popupInterval)
        })
    }

    gameEnd = () => {
        this.playSong(0);
        clearInterval( this.state.interval );
    }

    render(){
        return (
            <MOLE_CONTEXT.Provider value={{
                ...this.state,
                bonkMole: this.bonkMole,
                gameStart: this.gameStart,
                gameEnd: this.gameEnd,
                setFinalTime: this.setFinalTime,
                gameReset: this.gameReset,
                handleClick: this.handleClick,
                refreshToken: this.refreshToken,
                playSong: this.playSong
            }}>
                {this.props.children}
            </MOLE_CONTEXT.Provider>
        )
    }
}

export default MOLEPROVIDER;