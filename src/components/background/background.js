import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './background.css';

const Background = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
          xl={{ span: 10, offset: 1 }}
          xxl={{ span: 10, offset: 1 }}
          className='background'
        >
          <Row fluid className='background-header'>
            <Col>
              <h1>Pomodoro</h1>
            </Col>
          </Row>
          {props.body}
        </Col>
        <Col
          className='text-col-desktop'
          sm={{ span: 1 }}
          md={{ span: 1 }}
          lg={{ span: 1 }}
          xl={{ span: 1 }}
          xxl={{ span: 1 }}
        >
          <img
            className='text-img-desktop'
            src={props.image}
            alt='productivity'
          />
        </Col>
      </Row>
      <Row>
        <Col
          className='text-col-mobile'
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 12 }}
        >
          <img
            className='text-img-mobile'
            src={props.image.replace('.png', '-hor.png')}
            alt='productivity'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Background;
