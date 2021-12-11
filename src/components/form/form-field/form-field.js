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
      <Row className='form-row'>
        <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
          <Form.Label>{this.props.label}</Form.Label>
        </Col>
        <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
          <Form.Range
            min='5'
            max='60'
            value={this.props.value}
            onChange={this.emitData}
          />
        </Col>
        <Col
          className='range-mins-col'
          xs={3}
          sm={3}
          md={3}
          lg={3}
          xl={3}
          xxl={3}
        >
          <div className='range-mins'>
            <span className='range-value'>
              {String(this.props.value).padStart(2, '0')}
            </span>
            <span className='mins-text'>mins</span>
          </div>
        </Col>
      </Row>
    );
  }
}

export default FormField;
