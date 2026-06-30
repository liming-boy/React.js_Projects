import { useState } from 'react'


function Counter() {
  // let count = 3

  const [count , setCounter] = useState(0)

  const addValue = () => {
    setCounter(count+1)
    // count = count + 1
    // console.log("current count is : ", count)  
  }
  const decreaseValue = () => {
    setCounter(count-1)
    // count = count - 1
    // console.log("current count is : ", count)
  }
return(
  <>
  <h1>Counting Limings gfs </h1>
  <h2>Liming has {count} gfs in total.Please increase it </h2>

  
  <button onClick={addValue}> Add his Clicking this button
  </button>
  <br/>
  <button onClick={decreaseValue}> Decrease his Value Clicking this button
  </button>
  </>

)
}
export default Counter
