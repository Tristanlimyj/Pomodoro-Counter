import React from 'react';
import './counter.css';

class Counter extends React.Component {
  // Getting the Minutes and Seconds String from the Count
  minsAndSeconds = () => {
    let minutes = Math.floor(this.props.value / 60).toString();
    let seconds = (this.props.value % 60).toString();

    return minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0');
  };

  counterBlinker = () => {
    if (this.props.showCount) {
      return (
        <h1 style={{ color: '#000000' }} className='counter'>
          {this.minsAndSeconds()}
        </h1>
      );
    }
    return (
      <h1 style={{ color: '#ffffff' }} className='counter'>
        {this.minsAndSeconds()}
      </h1>
    );
  };

  render() {
    return <div>{this.counterBlinker()}</div>;
  }
}

export default Counter;
