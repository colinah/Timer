import React , {Component} from 'react';
import classes from './Timer.module.css';

class Timer extends Component {

    componentDidMount(){
        setInterval( this.props.decrement,1000)
    }
    
    render () {
        let secs = this.props.seconds;
        if(secs < 10){
            secs = '0' + secs
        }
        let mins = this.props.minutes;
        if(mins < 10){
            mins = '0' + mins
        }
        let hrs = this.props.hours;
        if(hrs < 10){
            hrs = '0' + hrs
        }
        return (
            <div className={classes.Timer}>
                <p>{hrs}:{mins}:{secs}</p>
            </div>
        )
    }
}

export default Timer
