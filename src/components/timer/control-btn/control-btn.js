import React from 'react';

class ControlButton extends React.Component {
  constructor(props) {
    super(props);
  }
  timerCall = () => {
    this.props.changeTimer(this.props.timerType);
  };
  render() {
    return (
      <img
        className='setting-btns'
        src={this.props.btnImg}
        onClick={this.timerCall}
      />
    );
  }
}

export default ControlButton;
