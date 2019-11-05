import React , { Component } from 'react';
import classes from './Timer.module.css';

class Timer extends Component {
    state = {
        //Must always be in seconds
        seconds: 3,
        minutes: 1,
        hours: 30
    }

    componentDidMount(){
        setInterval(this.decrementHandler,1000)
    }
    
    

    decrementHandler = () => {
         if(this.state.hours > 0 && this.state.minutes === 0 && this.state.seconds === 0){
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

    render () {
        
        return (
            <div className={classes.Timer}>
                <h4>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</h4>
            </div>
        )
    }
}

export default Timer
