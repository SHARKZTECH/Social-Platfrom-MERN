import React,{useState} from 'react';
import { Container,Form,Button ,Col,Row, Card} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from "../assets/logo1.png"
import {useDispatch,useSelector} from "react-redux"
import {loginUserAction} from "../redux/actions/userActions"
import AlertComponent from './AlertComponent';


const Login = ({show,setShow,text,setText}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [userInfo,setUserInfo]=useState({    
        "username":"",
        "password":"",
    });

    const handleChange=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setUserInfo({...userInfo,[name]:value});
    }
    
    const {loading,userInfor,error}=useSelector((state)=>state.login);

    const handlerLogin=(e)=>{
        e.preventDefault();
        setShow(false);
        if(userInfo.username && userInfo.password ){
               dispatch(loginUserAction(userInfo)); 
               if(error){
                setText(error);
                setShow(true)
               }
               else if(!loading && userInfor){
                   setText("Login successfully!");
                   setShow(true);
                   navigate("/");
               }     
        }else{
            setText("All fields Required !");
            setShow(true);
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

            <Col xs={12} md={6} className="mt-4">
                <Card>
                    <Card.Body>
                <Form>
                <AlertComponent text={text} show={show} setShow={setShow}/>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                     onChange={handleChange}
                     name="username"
                     value={userInfo.username}/>     
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                       onChange={handleChange}
                       name="password"
                       value={userInfo.password}/>
                </Form.Group>    
                <Button variant="primary" type="submit" onClick={handlerLogin}>
                    {loading ? "loading..." : "Login"}
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
