import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MOLE_CONTEXT from '../context/MoleContext';
import BackButton from '../misc/BackButton';

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
        // TODO: api call to get scores of user
    }
    setScores = (scores) => {
        this.setState({
            scores
        });
    }
    componentDidMount(){
        this.getAllScores();
    }
    render(){
        const scores = (typeof this.state.scores === "object") ? this.state.scores : [];
        return(<>
            <ol className="leaderboard--wrapper">
                <li className="leaderboard--item">
                    <div className="leaderboard--item--header--users">Players</div>
                    <div className="leaderboard--item--header--scores">Scores</div>
                </li>
                {scores.map(score=>{
                    return <li className="leaderboard--item" key={score.score_id}>
                        <div className="leaderboard--item--user button--hover">
                            <Link to={`/leaderboard/${score.user_name}`}>
                                {score.user_name}
                            </Link>
                        </div>
                        <div className="leaderboard--item--score">{score.score}</div>
                    </li>
                })}
            </ol>
            <BackButton />
        </>)
    }
}

export default withRouter(Leaderboard);