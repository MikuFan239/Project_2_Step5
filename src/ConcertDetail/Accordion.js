// Taking reference from: https://github.com/myogeshchavan97/react-accordion-demo
import './Accordion.css';
import React, { useState } from "react";
import { BsChevronDoubleUp, BsChevronDoubleDown } from "react-icons/bs";

const Accordion = ({ title, content }) => {
   const [isActive, setIsActive] = useState(false);
   
   return (
     <div className="accordion-item">
       <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
         <div>{title}</div>
         <div>{isActive ? <BsChevronDoubleUp className='accordionIcon'/> : <BsChevronDoubleDown className='accordionIcon'/>}</div>
       </div>
       {isActive && <div className="accordion-content">{content}</div>}
     </div>
   );
 };
 
export default Accordion;