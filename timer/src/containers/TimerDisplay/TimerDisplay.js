import React, { Component } from 'react';
import classes from './TimerDisplay.module.css';
import Timer from '../../components/Timer/Timer';
import TimerControls from '../TimerControls/TimerControls';

class TimerDisplay extends Component {
    state = {
        seconds: 10,
        minutes: 10,
        hours: 0,
        timerRunning: true
    }


    stopHandler = () => {
        this.setState({timerRunning: false});
    };
    startHandler = () => {
        this.setState({timerRunning: true });
    };
    decrementHandler = () => {
        if(this.state.timerRunning) {
            if(this.state.hours === 0 && this.state.minutes === 0 && this.state.seconds === 0){
                clearInterval()
                this.setState({seconds:15,timerRunning:false})
            } else if(this.state.hours > 0 && this.state.minutes === 0 && this.state.seconds === 0){
                this.setState(prevState => {
                    return {
                        seconds: 59,
                        minutes: 59,
                        hours: prevState.hours - 1}
                })
            } else if(this.state.minutes > 0 && this.state.seconds === 0){
                this.setState(prevState => {
                    return {
                        seconds: 59,
                        minutes: prevState.minutes - 1}
                })
            } else if(this.state.seconds > 0 ){
                this.setState(prevState => {
                    return {
                        seconds: prevState.seconds - 1}
                })
            }
        }
    };

    render () {
        return (
            <div className={classes.TimerDisplay}>
                <Timer 
                    decrement = {this.decrementHandler}
                    seconds = {this.state.seconds}
                    minutes = {this.state.minutes}
                    hours = {this.state.hours}
                />
                <TimerControls 
                  stop = { this.stopHandler } 
                  start = { this.startHandler } 
                />
            </div>
        )
    }
}

export default TimerDisplay