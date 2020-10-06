import React, { Component } from 'react';
import startbutton from '../images/logo/startbutton2.png';
import logo from '../images/logo/logo8.png';
import threeD from '../images/logo/3D5.png';
import hammer from '../images/things/hammer3.png';

class MainMenu extends Component {
    render(){
        return (
            <form
                onSubmit={this.props.handleStartButton}
                className="mainmenu"
            >   
                <div className="section--column">
                    <img className="img--logo" alt="logo" src={logo} />
                    <img className="img--3d" alt="3d" src={threeD} />
                    <div className="section--row">
                        <img className="img--hammer" alt="hammer" src={hammer} />
                        <button type="submit">
                            <img className="img--startbutton" alt="startbutton" src={startbutton} />
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default MainMenu;