import React from 'react';

import Counter from './counter';
import ControlButton from './control-button';
import ResetButton from './reset-button';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimer: 'study',
      count: this.minToSeconds(this.props.StudyTime),
    };
  }

  // Setting the Initial State for the Timer
  currentState = () => {
    switch (this.state.currentTimer) {
      case 'study':
        this.setState({ count: this.minToSeconds(this.props.StudyTime) });
        break;
      case 'longbreak':
        this.setState({ count: this.minToSeconds(this.props.LongBreakTime) });
        break;
      case 'shortbreak':
        this.setState({ count: this.minToSeconds(this.props.ShortBreakTime) });
        break;
      default:
        this.setState({ count: this.minToSeconds(this.props.StudyTime) });
        break;
    }

    return;
  };

  // Counting Down
  countDown = () => {
    // while more than 0
    this.setState((prevState) => ({ count: prevState.count - 1 }));
    // change the state to show pop up
  };
  // Minutes to Seconds -> Interger
  minToSeconds = (mins) => {
    return mins * 60;
  };
  // Changing The Timer of Timer
  changeTimer = (timerType) => {
    this.setState(
      {
        currentTimer: timerType,
      },
      () => this.currentState()
    );
  };

  render() {
    return React.createElement(
      'div',
      { className: 'timer' },
      <Counter value={this.state.count} />,
      <div className='d-grid gap-2'>
        <ControlButton
          changeTimer={this.changeTimer}
          buttonSize='lg'
          buttonVariant='primary'
          buttonText='Study'
          timerType='study'
        />
        <ControlButton
          changeTimer={this.changeTimer}
          buttonSize='lg'
          buttonVariant='primary'
          buttonText='Long Break'
          timerType='longbreak'
        />
        <ControlButton
          changeTimer={this.changeTimer}
          buttonSize='lg'
          buttonVariant='primary'
          buttonText='Short Break'
          timerType='shortbreak'
        />
        <ResetButton
          buttonSize='lg'
          buttonVariant='primary'
          buttonText='Reset Settings'
          resetForm={this.props.resetForm}
        />
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.countDown();
    }, 1000);
  }
}

export default Timer;
