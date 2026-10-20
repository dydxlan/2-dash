import { useState } from 'react';


function Header() { /*header function */
return <h1>Header</h1>; 
}

function Footer() { /*footer function */
    return <h1>Footer</h1>;
}

function Sidebar() { /*sidebar function */
    const [clicks, setClicks] = useState(0);
    function handleClick1() {
    setClicks(clicks + 1);
    }
    const [on, setOff] = useState(false);
    function handleClick2() {
        setOff(!on);
    }
    return (
        <div>
            <h1>Sidebar</h1>                    
            <Sidebar_ />
            <h3>middle text</h3>
            <Sidebar_ side="3rd line" />
            <button onClick={handleClick1}>{clicks} Clicks</button>
            <button onClick={handleClick2}>{on ? 'On' : 'Off'}</button>
        </div>
    );
}

function Sidebar_({side}) { /*sidebar function */
    return <h3>{side ? side : "Default Sidebar Text"}</h3>;
}

function Sidebar2() { /*sidebar function */
    return <h3>Sidebar2</h3>;
}

export default function HomePage() { /*homepage function */
    return (
        <div>
            <Header /> 
            <Sidebar /> 
            <Footer /> 
        </div>
    );
}

//root.render(<HomePage />);

