import React from 'react';

import Counter from './counter/counter';
import ControlButton from './control-btn/control-btn';
import StatusBar from './progress-bar/progress-bar';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimer: 'study',
      originalCount: this.minToSeconds(this.props.StudyTime),
      count: this.minToSeconds(this.props.StudyTime),
    };
  }

  // Setting the Initial State for the Timer
  currentState = () => {
    switch (this.state.currentTimer) {
      case 'study':
        this.setState({
          originalCount: this.minToSeconds(this.props.StudyTime),
          count: this.minToSeconds(this.props.StudyTime),
        });
        break;
      case 'longbreak':
        this.setState({
          originalCount: this.minToSeconds(this.props.LongBreakTime),
          count: this.minToSeconds(this.props.LongBreakTime),
        });
        break;
      case 'shortbreak':
        this.setState({
          originalCount: this.minToSeconds(this.props.ShortBreakTime),
          count: this.minToSeconds(this.props.ShortBreakTime),
        });
        break;
      default:
        this.setState({
          originalCount: this.minToSeconds(this.props.StudyTime),
          count: this.minToSeconds(this.props.StudyTime),
        });
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
    return (
      <div>
        <StatusBar
          timeLeft={this.state.count}
          totalCount={this.state.originalCount}
        />
        <Row id='counter-row'>
          <Col id='counter-col'>
            <Counter value={this.state.count} />
          </Col>
        </Row>
        <Row id='study-btn-row'>
          <Col id='study-btn-col'>
            <img
              src='/study-btn.png'
              id='study-btn'
              onClick={this.changeTimer}
            />
          </Col>
        </Row>
        <Row id='button-row'>
          <Col
            id='button-col'
            sm={{ span: 12 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            xl={{ span: 8, offset: 2 }}
            xxl={{ span: 8, offset: 2 }}
          >
            <ControlButton
              changeTimer={this.changeTimer}
              btnImg='/long-break-btn.png'
              timerType='longbreak'
            />
            <ControlButton
              changeTimer={this.changeTimer}
              btnImg='/short-break-btn.png'
              timerType='shortbreak'
            />
            <img
              className='setting-btns'
              src='/settings-btn.png'
              onClick={this.props.resetForm}
            />
          </Col>
        </Row>
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
