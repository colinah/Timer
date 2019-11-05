import React, { Component } from 'react';
import classes from './TimerDisplay.module.css';
import Timer from '../../components/Timer/Timer';
import TimerControls from '../TimerControls/TimerControls';

class TimerDisplay extends Component {
    render () {
        return (
            <div className={classes.Timer}>
                <Timer />
                <TimerControls/>
            </div>
        )
    }
}

export default TimerDisplay