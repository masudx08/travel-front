import React, {useState} from 'react'
import { Button, Collapse } from 'react-bootstrap';
import './collapser.css'
function Collapser({children, introduction, flightLink, hotelLink, packageLink}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
        {children}
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div  className='p-4'>
          {introduction}
          </div>
          <div className='btnLink'>
            <a target='_blank' href={flightLink}>Check Flight Prices</a>
            <a target='_blank' href={hotelLink}>Check Hotel Prices</a>
            <a target='_blank' href={packageLink}>Check Package Prices</a>
          </div>
        </div>
       
      </Collapse>
    </>
  );
}

export default Collapser