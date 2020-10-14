import React, { Component } from 'react';
import MOLE_CONTEXT from '../context/MoleContext';
import HUD from '../hud/HUD';

class ModeRanked extends Component {
    static contextType = MOLE_CONTEXT;

    state = {
        timer: 0,
        countdown: 5
    }

    // countdown to start function
    countdown = (callback) => {
        // count down to 0 from n, then do callback
        this.setState({
            interval: setInterval(()=>{
                if (this.state.countdown > 0) {
                    console.log(this.state.countdown)
                    this.setState({
                        countdown: this.state.countdown - 1
                    })
                } else {
                    callback();
                }
            },1000)
        });
    }

    // start timer function
    timer = (callback) => {
        // if points < 100 then increment timer and wait a second
        // otherwise run end of game menu
        this.setState({
            interval: setInterval(()=>{
                if (this.context.points < 100) {
                    this.setState({
                        timer: this.state.timer + 1
                    })
                } else {
                    callback();
                }
            },1000)
        });
    }

    // pause menu function
    pause = () => {
        // pause the game somehow
    }

    // stop timer ( after 100 points or w/e ) function
    stopTimer = () => {
        clearInterval(this.state.interval);
    }

    // // // // these will likely be a leaderboard component
    // // // // get leaderboards from back end function

    // // // // display leaderboards function

    // // // // submit score to leaderboards function

    // end of game menu
    endOfGame = () => {
        // generate end of game menu
        this.context.gameEnd();
        alert('end');
    }

    componentDidMount(){
        // run countdown then context gameStart
        this.countdown(()=>{
            clearInterval( this.state.interval );
            this.context.gameStart();
            this.timer( ()=>{
                this.stopTimer();
                this.endOfGame();
            })
        })
    }
    
    render(){
        return(
            <>
                {this.state.countdown > 0 ? <div className="countdown">{this.state.countdown}</div> : this.props.children}
                <HUD timer={this.state.timer} />
            </>
        )
    }
}

export default ModeRanked;