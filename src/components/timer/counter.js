import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  // Getting the Minutes and Seconds String from the Count
  minsAndSeconds = () => {
    let minutes = Math.floor(this.props.value / 60).toString();
    let seconds = (this.props.value % 60).toString();

    return minutes.padStart(2, '0') + ':' + seconds.padEnd(2, '0');
  };

  render() {
    return React.createElement(
      'h1',
      { className: 'counter' },
      this.minsAndSeconds()
    );
  }
}

export default Counter;
