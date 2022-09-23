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
        <Form onSubmit={submitHandler} className='d-flex'>
            <Form.Control
            type="text"
            name="q"
            onChange={(e)=>setKeyword(e.target.value)}
            className="mr-sm ml-sm-3"
            ></Form.Control>

            <Button
            type='submit'
            variant='outline-success'
            >
                submit
            </Button>
        </Form>
    )
}

export default SearchBox