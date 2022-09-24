import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import CreatePost from './CreatePost';

const CreatePostModal = (props) => {
  
    return (
        <>
        {props.show &&(
       <Modal
       {...props}
       style={{width:"100vw"}}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
           <CreatePost gap={1} />
        </Modal.Body>
       </Modal>
        )}
        </>
    );
}

export default CreatePostModal;
