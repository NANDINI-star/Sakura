import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function FAQCompo() {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="Accordion bg-white p-2 md:p-4 mb-4 rounded-[30px] my-10 shadow max-w-[953px] h-93 flex flex-col">
      <div className="question flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
        <h4 className="text-lg w-795 h-30 "   
        style={{ color: isActive ? '#BC005A' : 'black',
        fontFamily: 'Inria Sans, sans-serif', }}>
          Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur ?
        </h4>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={`icon transform ${isActive ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        className={`answer text-gray-600 overflow-hidden transition-max-height ${
          isActive ? 'max-h-[355px]' : 'max-h-0'
        }`}
        style={{ maxHeight: isActive ? '355px' : '0' }}
      >
        <p>
          Lorem ipsum, dolor sit ametLorem ipsum, dolor sit amet consectetur adipisicing elit. Ea deleniti itaque accusantium cumque dolorum ex dolor. Laborum, quidem odio. Sed?
         itconsectetur adipisicing elit. Ea deleniti itaque accusantium cumque dolorum ex dolor. Laborum, quidem odio. Sed?
        </p>
      </div>
    </div>
  );
}

export default FAQCompo;
