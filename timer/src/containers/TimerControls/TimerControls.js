import React from 'react';

import classes from './TimerControls.module.css'
const timerControls = () => {
    return (
        <div className = { classes.TimerControls }>
            <Button>Start</Button>
        </div>
    )
}

export default timerControls;