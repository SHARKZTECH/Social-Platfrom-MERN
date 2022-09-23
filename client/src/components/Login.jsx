import React from 'react';
import { Container,Form,Button ,Col,Row, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LOGO from "../assets/logo1.png"

const Login = () => {
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

            <Col xs={12} md={6} className="mt-4">
                <Card>
                    <Card.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />     
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>    
                <Button variant="primary" type="submit">
                    Login
                </Button>
                </Form>
                <p>Don`t Have an account ? Register <Link to={'/register'}>Here</Link></p>
                </Card.Body>
                </Card>
            </Col>
        </Row>
     </Container>
    );
}

export default Login;
