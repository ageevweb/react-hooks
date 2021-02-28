import React, {useState, useEffect} from 'react'

function UseEffectHook() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({x:0, y:0})


  // вызывается каждый раз когда происходит рендер компонента
  // useEffect(()=> {})

  const mouseMoveHandler = e => {
    setPos({
      x: e.clientX,
      y: e.clientY
    })
  }  

  // component did mount (2 параметром пустой массив)
  useEffect(()=>{
    console.log('componentDidMount')
    window.addEventListener('mousemove', mouseMoveHandler)

    // удалить слушатель когда будет заканчиваться действие эффекта
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  // вызывается только при изменении стейта (2 параметр)
  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((resp) => resp.json())
      .then((json) => setData(json))
  }, [type]) //вызывается только при изменении type

  return ( 
    <div className="UseEffectHook">
      <h2>src: {type}</h2>
      <button onClick={()=>setType('users')}>users</button>
      <button onClick={()=>setType('todos')}>todos</button>
      <button onClick={()=>setType('posts')}>posts</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
}

export default UseEffectHook
