import React from 'react';
import '../App.css';


class Clock extends React.Component {
    state = { time: new Date().toLocaleTimeString() }

    componentDidMount(){
        this.interval = setInterval(this.checkTime, 500)
    }

    componentWillUount(){
        clearInterval(this.interval)
    }

    checkTime = () => {
        this.setState({ time: new Date().toDateString() })
    }

    render(){
      return(
        <h1>{this.state.time}</h1>
      )
    }
  }

export default Clock;