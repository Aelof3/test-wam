import React, { Component } from 'react';
import CubeFace from './CubeFace';

class Cube extends Component {
    state = {
        faces: ['front','right','left','top','bottom','back'],
        textures: {
            front: [0,1],
            right: [2,3],
            left: [4,5],
            top: [6,7],
            bottom: [8,9],
            back: [10,11]
        },
        moleLayout: {
            front: {
                num: 1,
                moles: [
                    0, 1, 2,
                    3, 4, 5,
                    6, 7, 8
                ]
            },
            right: {
                num: 2,
                moles: [
                    9, 10, 11,
                    12, 13, 14,
                    15, 16, 17
                ]
            },
            left: {
                num: 3,
                moles: [
                    18, 19, 20,
                    21, 22, 23,
                    24, 25, 26
                ]
            },
            top: {
                num: 4,
                moles: [
                    27, 28, 29,
                    30, 31, 32,
                    33, 34, 35
                ]
            },
            bottom: {
                num: 5,
                moles: [
                    36, 37, 38,
                    39, 40, 41,
                    42, 43, 44
                ]
            },
            back: {
                num: 6,
                moles: [
                    45, 46, 47,
                    48, 49, 50,
                    51, 52, 53
                ]
            }
        }
    }
    
    generateFaces = () => {
        return this.state.faces.map( face => {
            const moles = this.props.moles.filter( mole => this.state.moleLayout[face].moles.includes(mole.i) );
            return (
                <CubeFace 
                    key={btoa(face)} 
                    face={face} 
                    textures={this.state.textures[face]} 
                    moles={moles}
                />
            )
        })
    }

    componentDidMount(){
        console.log("Starting sequence.");
        //this.props.moles.startSequence();
    }

    render(){
        return (
            <div className="scene">
                <div className={`cube show-${this.props.cubeFace}`}>
                    {this.generateFaces()}
                </div>
            </div>
        )
    }
}

export default Cube;