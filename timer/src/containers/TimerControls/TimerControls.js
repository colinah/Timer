import React , { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './TimerControls.module.css';

class TimerControls extends Component {

    render() {
        return (
            <div className = { classes.TimerControls }>
                <Button 
                    clicked = {this.props.start}
                    btnType = 'Start'
                    >Start</Button>
                <Button 
                    clicked={this.props.stop}
                    btnType = 'Stop'
                    >Stop</Button>
                <br/>
                <Button
                    btnType = 'Reset'
                    clicked = {this.props.reset}
                    >Reset</Button>
                <Button
                    btnType = 'Lap'
                    >Lap</Button>
                <Button
                    clicked = {this.props.settings}
                    btnType = 'Settings'
                    >Settings</Button>
            </div>
        )
    }
}

export default TimerControls;