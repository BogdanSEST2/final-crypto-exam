import './index.css';
import { useState } from 'react';


export default function Accordion(props) {
    const {
        title, 
        defaultOpen=false, 
        children,
    } = props;
    const [showAccordionText, setShowAccordionText] = useState(defaultOpen);

    return <div 
        onClick={() => setShowAccordionText(!showAccordionText)} 
        className={`accordion-container ${showAccordionText}`}>
        <div className='accordion-block'>
            <h2 className="accordion-title">{title}</h2>
            <span className='accordion-button'>{showAccordionText ? '-' : '+'}</span>
        </div>
        {showAccordionText && <p className="accordion-text">{children}</p>}
    </div>
}