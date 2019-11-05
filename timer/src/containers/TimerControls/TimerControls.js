import React , { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './TimerControls.module.css';

class TimerControls extends Component {

    render() {
        return (
            <div className = { classes.TimerControls }>
                <Button clicked = {this.props.start}>Start</Button>
                <Button>Stop</Button>
                <Button>Reset</Button>
                <Button>Lap</Button>
                <Button>Settings</Button>
            </div>
        )
    }
}

export default TimerControls;