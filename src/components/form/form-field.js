import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './form-field.css';

// name, placeholder, default_value, label
class FormField extends React.Component {
  constructor(props) {
    super(props);
  }

  emitData = (event) => {
    this.props.setState(event, this.props.name);
  };

  render() {
    return React.createElement(
      'Row',
      { className: 'form-component' },
      <Form.Label>{this.props.label}</Form.Label>,
      <Row class='form-range'>
        <Col xs={9} sm={9} md={9} lg={9} xl={9} xxl={9}>
          <Form.Range
            min='5'
            max='60'
            value={this.props.value}
            onChange={this.emitData}
          />
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
          <p>{this.props.value} mins</p>
        </Col>
      </Row>
    );
  }
}

export default FormField;
