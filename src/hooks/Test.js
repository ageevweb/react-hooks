import React, {useState} from 'react'


function UseStateHook(props) {
  console.log(props)

  const [counter, setCounter] = useState(props.a)

  function increment(){
    setCounter(prev => prev + 1)
  }


  return (
    <div className="UseStateHook">
      <h1>счетчик: {counter}</h1>
      <button className="btn btn-success" onClick={increment}>[+]</button>
    </div>
  )
}

export default UseStateHook