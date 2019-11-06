import React, { Component } from 'react';
import classes from './TimerDisplay.module.css';
import Timer from '../../components/Timer/Timer';
import TimerControls from '../TimerControls/TimerControls';

class TimerDisplay extends Component {
    state = {
        initialTime: {
            seconds: 10,
            minutes: 10,
            hours: 10
        },
        seconds: 0,
        minutes: 0,
        hours: 0,
        timerRunning: false,
        interval: null
    }
    
    componentDidMount(){
        if(this.props.location.state){
            const newState = {...this.state};
            newState.seconds = this.props.location.state.seconds;
            newState.minutes = this.props.location.state.minutes;
            newState.hours = this.props.location.state.hours;
            this.setState({...newState})
        }
    }

    startHandler = () => {
        if(!this.state.timerRunning){
            this.setState({timerRunning: true });
            this.setState ({interval: setInterval(() => {
            this.decrementHandler()
        }, 1000)})
        } 
    };

    stopHandler = () => {
        clearInterval(this.state.interval)
        this.setState({timerRunning: false, interval: null});
    };

    resetHandler = () => {
            const newState = {...this.state};
            newState.seconds = this.props.location.state.seconds;
            newState.minutes = this.props.location.state.minutes;
            newState.hours = this.props.location.state.hours;
            this.setState({...newState})
        // let newState = {...this.state};
        // newState.seconds = this.state.initialTime.seconds
        // newState.minutes = this.state.initialTime.minutes
        // newState.hours = this.state.initialTime.hours
        // this.setState({...newState})
    }

    settingsHandler = () => {
        this.props.history.push('/settings')
    }

    decrementHandler = () => {
        if(this.state.timerRunning) {
            if(this.state.hours === 0 && this.state.minutes === 0 && this.state.seconds === 0){
                this.stopHandler();
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
                <TimerControls 
                  stop = {this.stopHandler} 
                  start = {this.startHandler} 
                  reset = {this.resetHandler}
                  settings = {this.settingsHandler}
                />
                <Timer 
                    decrement = {this.decrementHandler}
                    seconds = {this.state.seconds}
                    minutes = {this.state.minutes}
                    hours = {this.state.hours}
                />
            </div>
        )
    }
}

export default TimerDisplay