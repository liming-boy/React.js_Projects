import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)



function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    //Cleanup function to clear the interval
    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []); // Runs only once when the component mounts for the "[]"

  return <h1>Timer: {count} seconds</h1>;
}


}


export default App
