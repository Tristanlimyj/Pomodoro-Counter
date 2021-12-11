import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

import './progress-bar.css';

class StatusBar extends React.Component {
  constructor(props) {
    super(props);
  }

  currentPercentage = () => {
    const currentCount = this.props.totalCount - this.props.timeLeft;
    const currentPercentage = Math.round(
      (currentCount / this.props.totalCount) * 100
    );
    return String(currentPercentage) + '%';
  };

  currentCount = () => {
    return this.props.totalCount - this.props.timeLeft;
  };

  render() {
    return (
      <Row className='progress-bar-row'>
        <Col
          sm={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 7, offset: 2 }}
          xl={{ span: 7, offset: 2 }}
          xxl={{ span: 7, offset: 2 }}
        >
          <ProgressBar now={this.currentCount()} max={this.props.totalCount} />
        </Col>

        <Col
          className='progress-bar-percentage'
          sm={{ span: 1 }}
          md={{ span: 1 }}
          lg={{ span: 1 }}
          xl={{ span: 1 }}
          xxl={{ span: 1 }}
        >
          <h1>{this.currentPercentage()}</h1>
        </Col>
      </Row>
    );
  }
}

export default StatusBar;
