import React, { Component } from 'react';
import classes from './TimerDisplay.module.css';
import Timer from '../../components/Timer/Timer';

class TimerDisplay extends Component {
    render () {
        return (
            <div className={classes.Timer}>
                <Timer />
            </div>
        )
    }
}

export default TimerDisplay