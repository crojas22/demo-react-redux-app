import React, { Component } from 'react';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      previouseTime: 0,
      elapsedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.onTick);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onStart = () => {
    this.setState({
      running: true,
      previouseTime: Date.now(),
    });
  }

  onStop = () => {
    this.setState({
      running: false,
    });
  }

  onReset = () => {
    this.setState({
      elapsedTime: 0,
      previouseTime: Date.now(),
    });
  }

  onTick = () => {
    if (this.state.running) {
      let now = Date.now();
      this.setState({
        elapsedTime: this.state.elapsedTime + (now - this.state.previouseTime),
        previouseTime: Date.now(),
      });
    }
  }

  render() {
    let seconds = Math.floor(this.state.elapsedTime / 1000);
    return(
      <div>
        <h4>Stopwatch</h4>
        <h4> Seconds: {seconds} </h4>
        {
          this.state.running ?
            <button onClick={this.onStop.bind(this)} className="btn btn-warning">Stop</button>
            :
            <button onClick={this.onStart.bind(this)} className="btn btn-success">Start</button>
        }
        <button onClick={this.onReset} className="btn btn-danger">Reset</button>
      </div>
    );
  }
}
