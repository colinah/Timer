import React , { Component } from 'react';
import classes from './Timer.module.css';

class Timer extends Component {
    state = {
        //Must always be in seconds
        seconds: 5,
        minutes: 0,
        hours: 0
    }

    componentDidMount(){
        setInterval(this.decrementHandler,1000)
    }
    
    

    decrementHandler = () => {
        if(this.props.timerRunning){
            if(this.state.hours > 0 && this.state.minutes === 0 && this.state.seconds === 0){
                clearInterval()
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
    }

    render () {
        let secs = this.state.seconds;
        if(secs < 10){
            secs = '0' + secs
        }
        let mins = this.state.minutes;
        if(mins < 10){
            mins = '0' + mins
        }
        let hrs = this.state.hours;
        if(hrs < 10){
            hrs = '0' + hrs
        }
        console.log(secs.length)
        return (
            <div className={classes.Timer}>
                <h4>{hrs}:{mins}:{secs}</h4>
            </div>
        )
    }
}

export default Timer
