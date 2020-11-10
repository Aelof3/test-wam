import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BackButton extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.history.replace(this.props.optionalPath ? this.props.optionalPath : '/');
    }
    render(){
        return (
            <button
                tabIndex="1"
                className="leaderboard--button--back"
                onClick={this.handleClick}
            >back</button>
        )
    }
}

export default withRouter(BackButton);