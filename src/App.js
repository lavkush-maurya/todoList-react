import './App.css';
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  return (
    <div className='box'>
      <div className="app">
        <div className="mainHeading">
          <h1>MY DO LIST</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>What needs to be done today</h2>
        </div>
        <div className="input">
          <input value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            type="text"
            placeholder="Add item..." />
          <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {toDos.map((obj) => {

            return (<div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  console.log(e.target.checked)
                  console.log(obj)
                  setToDos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={(e) => {
                  setToDos(toDos.filter(obj2 => {
                    let temp;
                    if (obj2.id !== obj.id) {
                      temp = obj2
                    }
                    return temp;
                  }));
                }} className="fas fa-times"></i>
              </div>
            </div>)

          })}

          {toDos.map((obj) => {
            if (obj.status) {
              return (
                <div className="completed">
                  <h2>Tast completed: {obj.text}</h2>
                </div>
              )
            }
            return null
          })}

        </div>
      </div>
    </div>
  );
}

export default App;
