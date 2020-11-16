import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import startbutton from '../images/logo/startbutton2.png';
import leaderboard from '../images/logo/leaderboard1.png';
import options from '../images/logo/options.png';
import logo from '../images/logo/logo8.png';
import threeD from '../images/logo/3D5.png';
import hammer from '../images/things/hammer3.png';
import MOLE_CONTEXT from './context/MoleContext';

class MainMenu extends Component {
    static contextType = MOLE_CONTEXT;

    componentDidMount(){
        if (this.context.playSong) this.context.playSong(0);
    }
    render(){
        return (
            <section id="mainmenu-section" className="mainmenu" >
                <div className="section--column">
                    <img className="img--logo" alt="logo" src={logo} />
                    <img className="img--3d" alt="3d" src={threeD} />
                    <img className="img--hammer" alt="hammer" src={hammer} />
                    <div className="section--row start--wrap">
                        <Link className="button--menu" to="/app">
                            <img className="img--startbutton" alt="startbutton" src={startbutton} />
                        </Link>
                    </div>
                    <div className="section--row leaderboard--wrap">
                        <Link className="button--menu" to="/leaderboard">
                            <img className="img--leaderboard" alt="leaderboard" src={leaderboard} />
                        </Link>
                    </div>
                    <div className="section--row options--wrap">
                        <Link className="button--menu" to="/options">
                            <img className="img--options" alt="options" src={options} />
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(MainMenu);