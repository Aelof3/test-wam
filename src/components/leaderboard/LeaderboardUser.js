import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MOLE_CONTEXT from '../context/MoleContext';
import BackButton from '../misc/BackButton';

class LeaderboardUser extends Component {
    static contextType = MOLE_CONTEXT;
    state = {
        scores: []
    }
    getScores = () => {
        const userid = this.props.match.params.userid;
        // api call to get scores
        fetch(`${this.context.RESTAPI}/scores/${userid}`)
            .then(r => r.json())
            .then(r => this.setScores(r))
    }
    setScores = (scores) => {
        this.setState({
            scores
        });
    }
    componentDidMount(){
        this.getScores();
    }
    render(){
        const scores = (typeof this.state.scores === "object") ? this.state.scores : [];
        return(<>
            <ol className="leaderboard--wrapper">
                <li className="leaderboard--item">
                    <div className="leaderboard--item--header--users">Player</div>
                    <div className="leaderboard--item--header--scores">Scores</div>
                </li>
                {scores.map(score=>{
                    return <li className="leaderboard--item" key={score.score_id}>
                        <div className="leaderboard--item--user">{score.user_name}</div>
                        <div className="leaderboard--item--score">{score.score}</div>
                    </li>
                })}
            </ol>
            <BackButton optionalPath="/leaderboard"/>
        </>)
    }   //
}

export default withRouter(LeaderboardUser);