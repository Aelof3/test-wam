import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MOLE_CONTEXT from '../context/MoleContext';

class LeaderboardForm extends Component {
    static contextType = MOLE_CONTEXT;
    state = {
        submitted: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const user_name = form.get("user_name");
        if ( typeof user_name === "string" && user_name.length > 0 ) this.submitScore(user_name);
    }
    submitScore = (user_name) => {
        let self = this;
        if ( this.state.submitted ) {
            this.afterSubmit();
        } else {
            const options = {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache', 
                headers: {
                'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify({user_name:user_name,score:this.context.timer})
            }
            fetch(`${this.context.RESTAPI}/scores`,{...options})
                .then(r=>self.afterSubmit()) // will use history to push to leaderboard page with updated scores
        }
    }
    afterSubmit = () => {
        this.setState({
            submitted: true,
            points: 0
        })
        this.props.history.replace('/test-wam/leaderboard');
    }
    componentDidMount(){
        if ( this.context.points < 100 ) this.props.history.replace('/test-wam/leaderboard');
    }
    render(){
        return(<form onSubmit={this.handleSubmit}>
            <label htmlFor="user_name">Your Name:</label>
            <input type="text" required name="user_name" id="user_name"/>
            <button type="submit">Submit</button>
        </form>)
    }
}

export default withRouter(LeaderboardForm);