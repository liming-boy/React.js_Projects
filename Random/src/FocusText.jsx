import { useRef } from "react";

export default function FocusText() {
    const inputRef = useRef(null)

    function handleClick() {
        inputRef.current.focus();
    }


return (
    <>
    <input ref={inputRef}/>
    <button onClick={handleClick}>
    Click to focus on the input 
    </button>
    
    </>

)
}