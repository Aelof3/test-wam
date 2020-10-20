import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MOLE_CONTEXT from '../context/MoleContext';

class Leaderboard extends Component {
    static contextType = MOLE_CONTEXT;
    state = {
        scores: []
    }
    getAllScores = () => {
        // api call to get scores
        fetch(`${this.context.RESTAPI}/scores`)
            .then(r => r.json())
            .then(r => this.setScores(r))
    }
    getUserScores = (user) => {
        // api call to get scores of user
    }
    setScores = (scores) => {
        this.setState({
            scores
        });
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.history.replace('/test-wam/');
    }
    componentDidMount(){
        this.getAllScores();
    }
    render(){
        return(<>
            {this.state.scores.map(score=>{
                return <div key={score.score_id}>
                    <p>User: {score.user_name} | Score: {score.score}</p>
                </div>
            })}
            <button
                onClick={this.handleClick}
            >back</button>
        </>)
    }
}

export default withRouter(Leaderboard);