import React from 'react';
import TimmerButtonBase from './timer-button-base';

class ResetButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TimmerButtonBase
        variant={this.props.buttonVariant}
        size={this.props.buttonSize}
        buttonClick={this.props.resetForm}
        buttonText={this.props.buttonText}
      />
    );
  }
}

export default ResetButton;
