import React, { Component } from 'react';
import classes from './TimerDisplay.module.css';
import Timer from '../../components/Timer/Timer';
import TimerControls from '../TimerControls/TimerControls';

class TimerDisplay extends Component {
    state = {
        seconds: 0,
        minutes: 0,
        hours: 0,
        timerRunning: true
    }

    startHandler = () => {
        this.setState({timerRunning: true })
    }

    render () {
        return (
            <div className={classes.Timer}>
                <Timer timerRunning = {this.state.timerRunning}/>
                <TimerControls start = {this.startHandler} />
            </div>
        )
    }
}

export default TimerDisplay