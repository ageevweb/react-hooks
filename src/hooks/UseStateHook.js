import React, {useState} from 'react'

function computeInitialCounter(){
  console.log('some calc...')
  return Math.trunc(Math.random() * 20)
}


function UseStateHook() {
  /*
    const counterState = useState(0)

    возвращает кортеж(Array с заранее определенными элементами).
    0: состояние, 
    1: функция для изменеия состояния
  */

  // if(true){
  //   const [counter, setCounter] = useState(0)
  // } ----- ТАК ДЕЛАТЬ НЕЛЬЗЯ!!!

  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
    // колбек ф вычислит 1 раз функцию и не будет бегать наверх
  })

  const [state, setState] = useState({
    title: 'какой-то заголовок',
    date: Date.now()
  })

  function increment(){
    // setCounter - асинхронная ф, поэтому best practice считается: 
    // изменение стейта через колбек с исп предыдущего состояния
    setCounter(prev => prev + 1)
  }

  function decrement(){
    setCounter(counter - 1)
  }

  function updateTitle(){
    setState(prev => {
      return {
        ...prev,
        title: 'новое значение',
        date: Date.now()
      }
    })
  }

  return (
    <div className="UseStateHook">
      <h1>счетчик: {counter}</h1>
      <button className="btn btn-success" onClick={increment}>[+]</button>
      <button className="btn btn-danger" onClick={decrement}>[-]</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button className="btn btn-success" onClick={updateTitle}>изменить газвание</button>
    </div>
  )
}

export default UseStateHook
