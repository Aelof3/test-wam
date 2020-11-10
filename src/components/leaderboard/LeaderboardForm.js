import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MOLE_CONTEXT from '../context/MoleContext';
import BackButton from '../misc/BackButton';

class LeaderboardForm extends Component {
    static contextType = MOLE_CONTEXT;
    state = {
        submitted: false,
        submitPending: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.submitted || this.state.submitPending) return;
        const form = new FormData(e.target);
        const user_name = form.get("user_name");
        if ( typeof user_name === "string" && user_name.length > 0 ) this.submitScore(user_name);
    }
    submitScore = (user_name) => {
        let self = this;
        if ( this.state.submitted ) {
            this.afterSubmit();
        } else {
            this.setState({
                submitPending: true
            },()=>{
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
                        user_name:user_name,
                        score:this.context.timer,
                        authtoken:this.context.authtoken
                    })
                }
                fetch(`${this.context.RESTAPI}/scores`,{...options})
                    .then(r=>self.afterSubmit())
            });
        }
    }
    afterSubmit = () => {
        this.setState({
            submitted: true,
            submitPending: false
        },()=>{
            this.context.gameReset();
            this.props.history.replace('/leaderboard');
        })
    }
    componentDidMount(){
        if ( this.context.points < this.context.moleCount ) this.props.history.replace('/leaderboard');
    }
    render(){
        return(<form className="leaderboard--form" onSubmit={this.handleSubmit}>
            <div className="section--row">
                <h3 className="leaderboard--form--score">Your Score: {this.context.timer}</h3>
            </div>
            <div className="section--row leaderboard--form--username--wrapper">
                <label htmlFor="user_name">Your Name:</label>
                <input type="text" required name="user_name" autoFocus={true} tabIndex="1" id="user_name"/>
            </div>
            <button className="leaderboard--form--button--submitscore" tabIndex="1" type="submit">Submit</button>
            <BackButton />
        </form>)
    }
}

export default withRouter(LeaderboardForm);