import React from 'react';
import { Container,Form,Button ,Col,Row, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LOGO from "../assets/logo1.png"

const Register = () => {
    return (
     <Container className='mt-5'>
        <Row  className="justify-content-md-center">

            <Col xs={12} md={6} className="d-flex align-items-center">
               <div className='flex-shrink-0'>
                   <img src={LOGO} alt="logo" width={120}/>
               </div>
               <div className='flex-grow-1 ms-3'>
                  <h2>Sharkz City</h2>
                  <p>#It`s possible...</p>
               </div>
            </Col>

            <Col xs={12} md={6} className="mt-3">
                <Card className='mb-3'>
                    <Card.Body>
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
                <Button variant="primary" type="submit">
                    Register
                </Button>
                </Form>
                <p>Already Have an account ? Login <Link to={'/login'}>Here</Link></p>
                </Card.Body>
                </Card>
            </Col>


        </Row>
     </Container>
    );
}

export default Register;
