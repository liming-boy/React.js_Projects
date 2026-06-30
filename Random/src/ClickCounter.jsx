import { useRef } from "react";

export default function counter (){
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current+1;
        alert ( "you have clicked " + ref.current + ' times , stop clicking !')
    }

return(
    <button onClick={handleClick}>Dont click me,lol</button>

);
}