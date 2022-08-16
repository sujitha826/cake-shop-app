import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log('useFffect called during mounting of the component');
        const interval = setInterval(tick, 1000);

        console.log('Component unmounting code');
        return () => {
            clearInterval(interval);
        }
    }, [count]);

    return (
        <div>
            <h3>Ticking counter:</h3>{count}
        </div>
    );
}

export default IntervalHookCounter;