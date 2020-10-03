import React, { Component } from 'react';
import marios from '../../js/marios';
import textures from '../../js/textures';

class CubeFace extends Component {
    state = {
        marios: [],
        faces: ['front','right','left','top','bottom','back'],
        textures: textures
    }
    getRandomInt = (min,max) => {
        return Math.floor(Math.random() * max + min);
    }
    
    componentDidMount(){
        const numbers = Array(marios.length).fill().map((_, index) => index);
        numbers.sort(() => Math.random() - 0.5);
    
        const moleList = numbers.slice(0,9);
        
        this.setState({
            marios: moleList.map( n => marios[n] )
        })
    }

    render() {
        return (
            <div className={`cube__face cube__face--${this.props.face}`}>
                <div className="cube__face--section">
                    <div className="block">
                        <div className={`block__face block__face--${this.state.faces[0]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[1]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[2]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[3]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[4]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[5]}`}>
                            <img alt="" src={`${this.state.textures[35]}`} />
                        </div>
                    {/* <img alt="" src={`${this.state.marios[0]}`} />
                    <img alt="" src={`${this.state.marios[0]}`} /> */}
                    </div>
                </div>
                <div className="cube__face--section">
                    <div className="block">
                        <div className={`block__face block__face--${this.state.faces[0]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[1]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[2]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[3]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[4]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[5]}`}>
                            <img alt="" src={`${this.state.textures[35]}`} />
                        </div>
                    {/* <img alt="" src={`${this.state.marios[0]}`} />
                    <img alt="" src={`${this.state.marios[0]}`} /> */}
                    </div>
                    {/* <img alt="" src={`${this.state.marios[1]}`} />
                    <img alt="" src={`${this.state.marios[1]}`} /> */}
                </div>
                <div className="cube__face--section">
                    <div className="block">
                        <div className={`block__face block__face--${this.state.faces[0]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[1]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[2]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[3]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[4]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[5]}`}>
                            <img alt="" src={`${this.state.textures[35]}`} />
                        </div>
                    {/* <img alt="" src={`${this.state.marios[0]}`} />
                    <img alt="" src={`${this.state.marios[0]}`} /> */}
                    </div>
                    {/* <img alt="" src={`${this.state.marios[2]}`} />
                    <img alt="" src={`${this.state.marios[2]}`} /> */}
                </div>
                <div className="cube__face--section">
                    <div className="block">
                        <div className={`block__face block__face--${this.state.faces[0]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[1]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[2]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[3]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[4]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[5]}`}>
                            <img alt="" src={`${this.state.textures[35]}`} />
                        </div>
                    {/* <img alt="" src={`${this.state.marios[0]}`} />
                    <img alt="" src={`${this.state.marios[0]}`} /> */}
                    </div>
                    {/* <img alt="" src={`${this.state.marios[3]}`} />
                    <img alt="" src={`${this.state.marios[3]}`} /> */}
                </div>
                <div className="cube__face--section">
                    <div className="block">
                        <div className={`block__face block__face--${this.state.faces[0]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[1]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[2]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[3]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[4]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[5]}`}>
                            <img alt="" src={`${this.state.textures[35]}`} />
                        </div>
                    {/* <img alt="" src={`${this.state.marios[0]}`} />
                    <img alt="" src={`${this.state.marios[0]}`} /> */}
                    </div>
                    {/* <img alt="" src={`${this.state.marios[4]}`} />
                    <img alt="" src={`${this.state.marios[4]}`} /> */}
                </div>
                <div className="cube__face--section">
                    <div className="block">
                        <div className={`block__face block__face--${this.state.faces[0]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[1]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[2]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[3]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[4]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[5]}`}>
                            <img alt="" src={`${this.state.textures[35]}`} />
                        </div>
                    {/* <img alt="" src={`${this.state.marios[0]}`} />
                    <img alt="" src={`${this.state.marios[0]}`} /> */}
                    </div>
                    {/* <img alt="" src={`${this.state.marios[5]}`} />
                    <img alt="" src={`${this.state.marios[5]}`} /> */}
                </div>
                <div className="cube__face--section">
                    <div className="block">
                        <div className={`block__face block__face--${this.state.faces[0]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[1]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[2]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[3]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[4]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[5]}`}>
                            <img alt="" src={`${this.state.textures[35]}`} />
                        </div>
                    {/* <img alt="" src={`${this.state.marios[0]}`} />
                    <img alt="" src={`${this.state.marios[0]}`} /> */}
                    </div>
                    {/* <img alt="" src={`${this.state.marios[6]}`} />
                    <img alt="" src={`${this.state.marios[6]}`} /> */}
                </div>
                <div className="cube__face--section">
                    <div className="block">
                        <div className={`block__face block__face--${this.state.faces[0]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[1]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[2]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[3]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[4]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[5]}`}>
                            <img alt="" src={`${this.state.textures[35]}`} />
                        </div>
                    {/* <img alt="" src={`${this.state.marios[0]}`} />
                    <img alt="" src={`${this.state.marios[0]}`} /> */}
                    </div>
                    {/* <img alt="" src={`${this.state.marios[7]}`} />
                    <img alt="" src={`${this.state.marios[7]}`} /> */}
                </div>
                <div className="cube__face--section">
                    <div className="block">
                        <div className={`block__face block__face--${this.state.faces[0]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[1]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[2]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[3]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[4]}`}>
                            <img alt="" src={`${this.state.textures[24]}`} />
                        </div>
                        <div className={`block__face block__face--${this.state.faces[5]}`}>
                            <img alt="" src={`${this.state.textures[35]}`} />
                        </div>
                    {/* <img alt="" src={`${this.state.marios[0]}`} />
                    <img alt="" src={`${this.state.marios[0]}`} /> */}
                    </div>
                    {/* <img alt="" src={`${this.state.marios[8]}`} />
                    <img alt="" src={`${this.state.marios[8]}`} /> */}
                </div>
            </div>            
        )
    }
}

export default CubeFace;