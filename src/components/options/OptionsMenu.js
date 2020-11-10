import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MOLE_CONTEXT from '../context/MoleContext';
import BackButton from '../misc/BackButton';

class OptionsMenu extends Component {
    static contextType = MOLE_CONTEXT;
    handleSoundClick = () => {
        this.context.toggleOptions({
            sounds: !this.context.options.sounds,
            music: this.context.options.music,
        })
    }
    handleMusicClick = () => {
        this.context.toggleOptions({
            sounds: this.context.options.sounds,
            music: !this.context.options.music,
        })
    }
    render(){
        return (
            <section id="optionsmenu-section" className="optionsmenu" >
                <div className="section--column">
                    <button 
                        className="button--options--sound"
                        onClick={this.handleSoundClick}    
                    >Sound: {this.context.options.sounds ? 'on':'off'}</button>
                    <button 
                        className="button--options--music"
                        onClick={this.handleMusicClick}
                    >Music: {this.context.options.music ? 'on':'off'}</button>
                    <BackButton />
                </div>
            </section>
        )
    }
}

export default withRouter(OptionsMenu);