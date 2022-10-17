import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertComponent = ({text,setShow,show}) => {

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              {text}
      </Alert>
    );
  }

}

export default AlertComponent;
