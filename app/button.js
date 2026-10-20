import { useState } from 'react';
export default function button(){

    const [clicks, setClicks] = React.useState(0);
    function handleClick1() {
    setClicks(clicks + 1);
    }
    const [on, setOff] = React.useState(false);
    function handleClick2() {
        setOff(!on);
    }

    return (
        <button onClick={handleClick1}>{clicks} Clicks</button>,
        <button onClick={handleClick2}>{on ? 'On' : 'Off'}</button>
    )
}


            
            