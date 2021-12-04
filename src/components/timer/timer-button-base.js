import Button from 'react-bootstrap/Button';

const TimmerButtonBase = (props) => {
  return (
    <Button
      onClick={props.buttonClick}
      variant={props.buttonVariant}
      size={props.buttonSize}
    >
      {props.buttonText}
    </Button>
  );
};

export default TimmerButtonBase;
