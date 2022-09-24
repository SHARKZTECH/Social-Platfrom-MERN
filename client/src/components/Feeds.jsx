import React from 'react';
import { Card } from 'react-bootstrap';
import COVER from "../assets/cover.jpg";
import {BiMessageDots} from "react-icons/bi";
import {FaShareSquare} from "react-icons/fa"
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import FlipMove from "react-flip-move";


const Feeds = () => {
    return (
      <div className="feeds">
      <FlipMove>
      {Array.from({ length: 8 }).map((_, idx) => ( 
       <Card className='mt-2'>
         <Card.Img src={COVER} alt="img" fluid bsPrefix='card-img3'/>
         <Card.Body className='p-2'>
           <div className='d-flex'>
           <p className='me-2' >
           <FcLikePlaceholder size={25}/>
           </p>
           <p className='me-2'>
           <BiMessageDots size={25}/>
           </p>
           <p>
           <FaShareSquare size={25}/>
           </p>
           </div>
           <p className='mb-0'>0 likes</p>
           <p>How my new Profile is loking</p>
         </Card.Body>
       </Card>
      ))}
      </FlipMove>
      </div>
    );
}

export default Feeds;
