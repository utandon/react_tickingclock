import React, {Component} from 'react';

class TickingClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }
  changeTime() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.changeTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  // render() {
  //   return(
  //     <div>
  //       <h2>Hello Everyone!</h2>
  //       <h1>
  //           {this.props.date.toLocaleTimeString()}
  //       </h1>
  //     </div>
  //   );
  // }
  render() {
    return(
      <div>
        <h2>Hello Everyone!</h2>
        <h1>
            {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

export default TickingClock;
