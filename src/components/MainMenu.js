import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import startbutton from '../images/logo/startbutton2.png';
import leaderboard from '../images/logo/leaderboard1.png';
import logo from '../images/logo/logo8.png';
import threeD from '../images/logo/3D5.png';
import hammer from '../images/things/hammer3.png';
import MOLE_CONTEXT from './context/MoleContext';

class MainMenu extends Component {
    static contextType = MOLE_CONTEXT;

    componentDidMount(){
        let self = this;
        let menu = document.getElementById("mainmenu-section")
        menu.addEventListener('mousemove',function (e){
            self.context.playSong(0);
        })
        window.addEventListener('click',function(e){
            const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            if (isFirefox) self.props.history.replace('/app');
        })
    }
    render(){
        return (
            <section id="mainmenu-section" className="mainmenu" >
                <div className="section--column">
                    <img className="img--logo" alt="logo" src={logo} />
                    <img className="img--3d" alt="3d" src={threeD} />
                    <div className="section--row">
                        <div className="img--wrap"><img className="img--hammer" alt="hammer" src={hammer} /></div>
                        <Link to="/app">
                            <img className="img--startbutton" alt="startbutton" src={startbutton} />
                        </Link>
                    </div>
                    <div className="section--row leaderboard--wrap">
                        <Link to="/leaderboard">
                            <img className="img--leaderboard" alt="leaderboard" src={leaderboard} />
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(MainMenu);