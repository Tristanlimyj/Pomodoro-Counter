import React from 'react';

class ControlButton extends React.Component {
  timerCall = () => {
    this.props.changeTimer(this.props.timerType);
  };
  render() {
    return (
      <img
        className='setting-btns'
        src={this.props.btnImg}
        onClick={this.timerCall}
        alt='setting btns'
      />
    );
  }
}

export default ControlButton;
