import React, { useRef, useEffect } from 'react'

function FocusInput() {
    const inputRef = useRef(null);           // assign useRef() to a variable and use this variable as the value of ref attribute of a DOM element and take its current value for imperative access of this DOM element value.
    useEffect(() => {
        inputRef.current.focus()            // call focus() method on it's current value to focus on it while rendering the page for the first time.
    }, []);
    
    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput;