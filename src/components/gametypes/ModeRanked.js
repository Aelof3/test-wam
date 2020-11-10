import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
        this.context.playSong(1);
        this.setState({
            interval: setInterval(()=>{
                if (this.state.countdown > 0) {
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
                if (this.context.points < this.context.moleCount) {
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
        this.context.setFinalTime( this.state.timer );
        const options = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', 
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify({
                points: this.context.points,
                score:this.context.timer,
                authtoken:this.context.authtoken
            })
        }
        fetch(`${this.context.RESTAPI}/auth`,{...options})
            .then(r=>{
                this.props.history.replace('/leaderboard/form');
            })
    }

    handleAuthToken = (token) => {
        this.context.refreshToken(token);
        if (this.context.token === null) {
            this.props.history.replace('/');
        } else {
            this.countdown(()=>{
                clearInterval( this.state.interval );
                this.context.gameStart();
                this.timer( ()=>{
                    this.stopTimer();
                    this.endOfGame();
                })
            })
        }
    }
    
    componentDidMount(){
        const h = document.documentElement;
        if (h.requestFullscreen) h.requestFullscreen();
        // run countdown then context gameStart
        fetch(`${this.context.RESTAPI}/auth`)
            .then(r => r.json())
            .then(r => this.handleAuthToken(r.authtoken))
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

export default withRouter(ModeRanked);