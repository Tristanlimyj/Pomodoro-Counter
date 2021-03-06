import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import Timer from './components/timer/timer';
import InputForm from './components/form/form';
import Background from './components/background/background';

import './App.css';

class PomodoroApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completedForm: false,
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
    return (
      <InputForm
        StudyTime={this.state.StudyTime}
        ShortBreakTime={this.state.ShortBreakTime}
        LongBreakTime={this.state.LongBreakTime}
        userInput={this.userInput}
        formSubmit={this.formSubmit}
      />
    );
  };

  sideBarImg = () => {
    if (this.state.completedForm) {
      return '/WHPH.png';
    }
    return '/productivity-text.png';
  };

  render() {
    return (
      <Container fluid className='App'>
        <Background body={this.timerOrForm()} image={this.sideBarImg()} />
      </Container>
    );
  }
}

export default PomodoroApp;
