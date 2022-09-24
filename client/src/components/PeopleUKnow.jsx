import React from 'react';
import { Button } from 'react-bootstrap';
import COVER from "../assets/cover.jpg";


const PeopleUKnow = () => {
    return (
        <div>
                     
           <div className='mt-3'>
                 <h5>People you may know</h5>
                 <div className='pple'>
                 {Array.from({ length: 6 }).map((_, idx) => ( 
                 <div className='d-flex align-items-center mb-1'>
                    <img src={COVER} className="img" alt="img" />
                    <div className='me-4'>
                        <p className='m-0 p-0'>Sharkz</p>
                        <p className='m-0 p-0'>sharkz@gmail.com</p>
                    </div>
                    <Button size='sm'>Follow</Button>
                 </div>          
                 ))}
                 </div>
           </div>
        </div>
    );
}

export default PeopleUKnow;
