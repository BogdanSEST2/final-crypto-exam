import { useState } from 'react';
import './index.css';


export default function Tooltip(props) {
    const [showToolTip, setShowToolTip] = useState(false);

    const {
        position='top', 
        tooltipText, 
        children,
        onMouseEnter=(() => {
            setShowToolTip(true);
        }),
        onMouseLeave=(() => {
            setShowToolTip(false);
        })
    } = props;

    return <div className={`tooltip-block ${position}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <p className={`tooltip-text ${position} ${showToolTip ? 'show' : 'hide'}`}>{tooltipText}</p>
        {children}
    </div>
}