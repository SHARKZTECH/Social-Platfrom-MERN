import React from 'react';
import { Card } from 'react-bootstrap';

const Trends = () => {
    return (
        <div>
            
           <Card className='p-3'>
              <h3>Trends For You</h3> 
              <div>
                  <h5>#Minions</h5>
                  <p>97k shares</p>
              </div>    
              <div>
                  <h5>#Avegers</h5>
                  <p>80.5k shares</p>
              </div>   
              <div>
                  <h5>#ZainKeepcode</h5>
                  <p>72k shares</p>
              </div>   
              <div>
                  <h5>#Need For Speed</h5>
                  <p>27k shares</p>
              </div>  
           </Card>
        </div>
    );
}

export default Trends;
