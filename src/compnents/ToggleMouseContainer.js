import React, { useState } from 'react';
import HookMouse from './HookMouse';

function ToggleMouseContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Current Mouse Position</button>
            {display && <HookMouse />}
        </div>
    );
}

export default ToggleMouseContainer;