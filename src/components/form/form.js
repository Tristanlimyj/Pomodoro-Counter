import React from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
// Custom Component
import FormField from './form-field';
// CSS
import './form.css';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'info-form' },
      React.createElement(
        'div',
        null,

        <FormField
          name='StudyTime'
          value={this.props.StudyTime}
          label='Study Time'
          setState={this.props.userInput}
        />,
        <FormField
          name='ShortBreakTime'
          value={this.props.ShortBreakTime}
          label='Short Break Time'
          setState={this.props.userInput}
        />,
        <FormField
          name='LongBreakTime'
          value={this.props.LongBreakTime}
          label='Long Break Time'
          setState={this.props.userInput}
        />,
        <Button
          id='submit-btn'
          variant='outline-light'
          onClick={this.props.formSubmit}
        >
          Submit
        </Button>
      )
    );
  }
}

export default InputForm;
