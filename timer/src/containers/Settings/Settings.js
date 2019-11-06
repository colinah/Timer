import React , { Component } from 'react';

import classes from './Settings.module.css'
import Button from '../../components/UI/Button/Button';

class Settings extends Component {
    state = {
        seconds: 0,
        minutes: 0,
        hours: 0
    }

    returnHandler = () => {
        this.props.history.push({
            pathname: '/',
            state: {...this.state}
        })
    }

    onChangeHandler = (event, identifier) => {
            this.setState({[identifier]: event.target.value})
    }

    render () {
        return (
            <div className = {classes.Settings}>
                <h2 className = {classes.Header}>Settings</h2>
                <div>
                        <label>Set Time: </label>
                        <input 
                            name = 'hrs'
                            className={classes.Input}
                            type = "text"
                            size = '2'
                            value = {this.state.hours}
                            onChange = {(event) => this.onChangeHandler(event , 'hours')} />
                        <input 
                            name = 'min'
                            className={classes.Input}
                            type = "text"
                            size = '2'
                            value = {this.state.minutes} 
                            onChange = {(event) => this.onChangeHandler(event , 'minutes')} />
                        <input 
                            name = 'sec'
                            className={classes.Input}
                            type = "text"
                            size = '2'
                            value = {this.state.seconds} 
                            onChange = {(event) => this.onChangeHandler(event , 'seconds')} />
                </div>
                <Button
                clicked = {this.returnHandler}
                >Return</Button>
            </div>
        )
    }
}

export default Settings