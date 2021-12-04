import React from 'react';
import TimmerButtonBase from './timer-button-base';

class ControlButton extends React.Component {
  constructor(props) {
    super(props);
  }
  timerCall = () => {
    this.props.changeTimer(this.props.timerType);
  };
  render() {
    return (
      <TimmerButtonBase
        variant={this.props.buttonVariant}
        size={this.props.buttonSize}
        buttonClick={this.timerCall}
        buttonText={this.props.buttonText}
      />
    );
  }
}

export default ControlButton;
