import React, { useState } from 'react';
import { Container,Form,Button ,Col,Row, Card} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from "../assets/logo1.png"
import {useDispatch,useSelector} from "react-redux"
import {registerUserAction} from "../redux/actions/userActions"
import AlertComponent from './AlertComponent';

const Register = ({show,setShow,text,setText}) => {
    const navigate=useNavigate();
        const dispatch=useDispatch();
    const [userInfor,setUserInfor]=useState({
        "firstname":"",
        "lastname":"",
        "username":"",
        "password":"",
        "cpassword":""
    });
  

    const handleChange=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setUserInfor({...userInfor,[name]:value});
    }

    const {loading,error,success}=useSelector((state)=>state.register);
    console.log(loading,error,success)

    const handlerRegister=(e)=>{
        e.preventDefault();
        setShow(false);
        if(userInfor.firstname && userInfor.lastname && userInfor.username && userInfor.password && userInfor.cpassword){
            if(userInfor.password===userInfor.cpassword){
               dispatch(registerUserAction(userInfor));  
               if(error){
                setShow(true);
                setText(error);
               }
               setText("Successful registed")
               navigate("/login");
              
            }else{
                setShow(true);
                setText("Password Don`t match!")
            }
        }else{
            setShow(true);
            setText("All Fields Required!")
        }
    }

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
                <AlertComponent text={text} show={show} setShow={setShow}/>

                <Row>
                     <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" 
                        onChange={handleChange}
                        name="firstname"
                        value={userInfor.firstname}
                        />     
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name"
                          onChange={handleChange}
                          name="lastname"
                          value={userInfor.lastname}
                          />     
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                      onChange={handleChange}
                      name="username"
                      value={userInfor.username}
                      />     
                </Form.Group>

              <Row>
              <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                          onChange={handleChange}
                          name="password"
                          value={userInfor.password}/>
                    </Form.Group> 
                 </Col>
                 <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password"
                            onChange={handleChange}
                            name="cpassword"
                            value={userInfor.cpassword}/>
                    </Form.Group> 
                 </Col>
              </Row>   
                <Button variant="primary" type="submit" onClick={handlerRegister}>
                    {loading ? 'loading...': 'Register'}
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
