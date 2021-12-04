import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import Timer from './components/timer/timer';
import InputForm from './components/form/form';

import './App.css';

class PomodoroApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completedForm: true,
      StudyTime: 25,
      ShortBreakTime: 5,
      LongBreakTime: 15,
    };
  }

  // Confirming the Form
  formSubmit = () => {
    this.setState({
      completedForm: true,
    });
  };

  // Reseting the Values of the Form
  formReset = () => {
    this.setState({
      completedForm: false,
    });
  };

  // Modifying the Values of the Form
  userInput = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  // Rendering eitherthe Timer or the Form
  timerOrForm = () => {
    if (this.state.completedForm) {
      return (
        <Timer
          StudyTime={this.state.StudyTime}
          ShortBreakTime={this.state.ShortBreakTime}
          LongBreakTime={this.state.LongBreakTime}
          resetForm={this.formReset}
        />
      );
    }
    return React.createElement(
      'div',
      { className: 'App-header' },
      React.createElement('h1', null, 'Studying is a lifestyle'),
      <InputForm
        StudyTime={this.state.StudyTime}
        ShortBreakTime={this.state.ShortBreakTime}
        LongBreakTime={this.state.LongBreakTime}
        userInput={this.userInput}
        formSubmit={this.formSubmit}
      />
    );
  };

  render() {
    return (
      <Container fluid className='App'>
        {this.timerOrForm()}
      </Container>
    );
  }
}

export default PomodoroApp;
