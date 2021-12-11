import React from 'react';
import './counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  // Getting the Minutes and Seconds String from the Count
  minsAndSeconds = () => {
    let minutes = Math.floor(this.props.value / 60).toString();
    let seconds = (this.props.value % 60).toString();

    return minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0');
  };

  render() {
    return <h1 className='counter'>{this.minsAndSeconds()}</h1>;
  }
}

export default Counter;
