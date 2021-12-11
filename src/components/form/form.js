import React from 'react';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom Component
import FormField from './form-field/form-field';
// CSS
import './form.css';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className='background-body'>
        <Col
          sm={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
          xl={{ span: 4, offset: 4 }}
          xxl={{ span: 4, offset: 4 }}
          className='form-background'
        >
          <h1 className='form-header'>Set Your Time</h1>
          <div className='info-form'>
            <FormField
              name='StudyTime'
              value={this.props.StudyTime}
              label='Study'
              setState={this.props.userInput}
            />
            <FormField
              name='ShortBreakTime'
              value={this.props.ShortBreakTime}
              label='Short Break'
              setState={this.props.userInput}
            />
            <FormField
              name='LongBreakTime'
              value={this.props.LongBreakTime}
              label='Long Break'
              setState={this.props.userInput}
            />
          </div>
          <img
            src='/submit-btn.png'
            id='submit-btn'
            onClick={this.props.formSubmit}
          />
        </Col>
      </Row>
    );
  }
}

export default InputForm;
