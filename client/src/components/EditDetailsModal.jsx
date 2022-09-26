import React from 'react';
import { useState } from 'react';
import { Col, Row,Form,Card,Button, Modal } from 'react-bootstrap';
import FileBase from 'react-file-base64';

const EditDetailsModal = (props) => {
    const [userData,setUserData]=useState({
        profilePic:"",
        coverPic:"",
    })
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
                        <Form.Control type="text" placeholder="First name" />     
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Last name" />     
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="WorksAt" />     
                    </Form.Group>

                <Row>
                <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="About" />
                        </Form.Group> 
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="livesin" />
                        </Form.Group> 
                    </Col>
                </Row>   
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Profile picture</Form.Label>
                        <div className="file_input-container">
                        <FileBase  multiple={false} onDone={({ base64 }) => setUserData({ ...userData, profilePic: base64 })} value={userData.profilePic}/>   
                        </div> 
                    </Form.Group> 
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Cover picture</Form.Label>
                        <div className="file_input-container">
                        <FileBase  type="image" multiple={false} onDone={({ base64 }) => setUserData({ ...userData, coverPic: base64 })} value={userData.coverPic}/>   
                        </div> 
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
