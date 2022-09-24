import React,{useState,useEffect} from 'react'
import { Button,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({keyHandler}) => {
    const navigate=useNavigate()
    const [keyword,setKeyword]=useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
    
    }



    return (
        <Form onSubmit={submitHandler}>
        <Form.Group className="frm-group">
            <Form.Control
            type="text"
            name="q"
            onChange={(e)=>setKeyword(e.target.value)}
            className="frm-control"
            placeholder='#Treading'
            ></Form.Control>  
         </Form.Group>   
        </Form>
    )
}

export default SearchBox