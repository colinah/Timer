import React from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './TimerControls.module.css';

const timerControls = () => {
    return (
        <div className = { classes.TimerControls }>
            <Button>Start/Stop</Button>
            <Button>Reset</Button>
            <Button>Lap</Button>
            <Button>Settings</Button>
        </div>
    )
}

export default timerControls;