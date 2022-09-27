import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row,Form,Card,Button, Modal } from 'react-bootstrap';
import FileBase from 'react-file-base64';
import {useSelector,useDispatch} from "react-redux";
import {updateUserAction,getUserAction} from "../redux/actions/userActions"


const EditDetailsModal = (props) => {
    const dispatch=useDispatch();
    const [userData,setUserData]=useState({
        "profilePic":"",
        "coverPic":"",
        "firstname":"",
        "lastname":"",
        "about":"",
        "relationship":"",
        "worksAt":"",
        "livesin":""
    })
    const handleChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value});
    }
    const {userInfor}=useSelector((state)=>state.login);
    const {user,success:successUser}=useSelector((state)=>state.user);
    const {loading,success}=useSelector((state)=>state.updateUser);
   
    useEffect(()=>{
        if(successUser){
            setUserData({
                "profilePic":user?.profilePic,
                "coverPic":user?.coverPic,
                "firstname":user?.firstname,
                "lastname":user?.lastname,
                "about":user?.about,
                "relationship":user?.relationship,
                "worksAt":user?.worksAt,
                "livesin":user?.livesin
            });   

        }
    },[successUser])
    const newUser={
        ...userData,
        currentUserId:userInfor?.user._id,
        currentUserAdminStatus:userInfor?.user.isAdmin
    }  
    const handleUpdate=(e)=>{
        e.preventDefault();
        dispatch(updateUserAction(userInfor.user._id,newUser));
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
                        <Form.Control type="text" placeholder="First name" 
                          onChange={handleChange}
                          name="firstname"
                          value={userData.firstname}
                        />     
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Last name" 
                          onChange={handleChange}
                          name="lastname"
                          value={userData.lastname}/>     
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="WorksAt"
                          onChange={handleChange}
                          name="worksAt"
                          value={userData.worksAt} />     
                    </Form.Group>

                <Row>
                <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="About"
                              onChange={handleChange}
                              name="about"
                              value={userData.about}  />
                        </Form.Group> 
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="livesin" 
                               onChange={handleChange}
                               name="livesin"
                               value={userData.livesin}/>
                        </Form.Group> 
                    </Col>
                </Row>   
                <Row>
                  <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="relationship" />
                        </Form.Group> 
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
