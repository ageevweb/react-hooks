import React, {useState, useEffect, useRef} from 'react'

// useRef - сохраняет состояние но не вызывает рендер

function UseRefHook() {
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)

  useEffect(()=> {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  return ( 
    <div className="UseRefHook">
      <h1>колличество рендеров: {renderCount.current}</h1>
      <input type="text" ref={inputRef} onInput={e=>setValue(e.target.value)} value={value}/>
    </div>
  )
}

export default UseRefHook