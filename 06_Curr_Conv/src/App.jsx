import { useState } from 'react'
import {InputBox} from './com'
import useCurrencyInfo from '/.hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("bdt")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const options = object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (

   {/*The Page div */}
<div 
  className='w-full'
    style={{
    backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F4085479.jpg&f=1&nofb=1&ipt=d15bc866272af7f79351b33f210b769c2b8d7fd8738f0ebc9367fb36d0233f81')`,

  }}>
 
 {/* The fucking inner all in one div */}
 <div>

  {/*Form tag */}
    <form 
      onSubmit={(e) => {e.preventDefault();
        convert()
      }}
    
    >

      {/* inside parent holder */}
        <div>

            {/* From box */}
            <div>

            </div>

            {/* To box */}
            <div>

            </div>

            {/* convert button */}
            <div>

            </div>

        </div>


    </form>
  </div>
</div>
  )
}

export default App
