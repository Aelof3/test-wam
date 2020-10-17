import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import startbutton from '../images/logo/startbutton2.png';
import logo from '../images/logo/logo8.png';
import threeD from '../images/logo/3D5.png';
import hammer from '../images/things/hammer3.png';

class MainMenu extends Component {
    render(){
        return (
            <section className="mainmenu" >
                <div className="section--column">
                    <img className="img--logo" alt="logo" src={logo} />
                    <img className="img--3d" alt="3d" src={threeD} />
                    <div className="section--row">
                        <div className="img--wrap"><img className="img--hammer" alt="hammer" src={hammer} /></div>
                        <Link to="/test-wam/app">
                            <img className="img--startbutton" alt="startbutton" src={startbutton} />
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainMenu;