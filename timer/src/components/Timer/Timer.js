import React , {Component} from 'react';
import classes from './Timer.module.css';

class Timer extends Component {
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
        console.log('hrs: ' , hrs, ' mins: ' , mins, ' secs: ' , secs)
        let timerClasses = classes.Timer
        if(hrs === '00' && mins === '00' && secs < 6){
            timerClasses = [classes.Timer, classes.Red].join(' ')
            console.log(timerClasses)
        }
        return (
            <div className={timerClasses}>
                <p>{hrs}:{mins}:{secs}</p>
            </div>
        )
    }
}

export default Timer
