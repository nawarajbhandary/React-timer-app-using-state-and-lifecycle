import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        timer: new Date(),
      });
    }, 1000);
  }

  renderFormatted() {
    const time = this.state.timer;
    return `${time.getHours()}: ${time.getMinutes()} : ${time.getSeconds()}`;
  }
  render() {
    return (
      <div>
        <strong>Time : </strong> {this.renderFormatted()}
        {/* Since we are invoking the method, so please do not use the this.state for method. */}
      </div>
    );
  }
}
