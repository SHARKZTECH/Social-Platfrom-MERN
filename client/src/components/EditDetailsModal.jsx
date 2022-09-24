import React from 'react';
import { Col, Row,Form,Card,Button, Modal } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

const EditDetailsModal = (props) => {
    const handleUpdate=(e)=>{
        e.preventDefault();
        props.onHide();
    }
    return (
        <>
        {props.show && (
        <Modal
        {...props}>
            <Modal.Header closeButton>                
            </Modal.Header>
            <Modal.Body>
           
                <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" />     
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />     
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />     
                    </Form.Group>

                <Row>
                <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group> 
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group> 
                    </Col>
                </Row>   
                    <Button variant="primary" type="submit" onClick={handleUpdate}>
                    Update
                </Button>
                </Form>
             
        </Modal.Body>
    </Modal>
    )}
    </>

    );
}

export default EditDetailsModal;
