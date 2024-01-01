import React, { useState } from 'react';
import './App.css';

function App() {
  const [ToDos, SetToDos] = useState([]);
  const [ToDo, SetToDo] = useState("");
  // const [date, setDate] = useState("")
  // const [ischecked,setChecked]=useState(false);

  const day = new Date().getDay();

  // Convert the day of the week to a string
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayString = daysOfWeek[day];

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {todayString} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={ToDo} onChange={(e) => SetToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { SetToDos([...ToDos, { text: ToDo, status: false, id: Date.now() }]); SetToDo("") }} className="fas fa-plus"></i>

      </div>

      <div className="todos">
        {
          ToDos.map((todo, index) =>
          (
            <div className="todo" >
              <div className="left">
                <input onChange={(e) => {
                  SetToDos(ToDos.filter(obj2 => {
                    if (obj2.id === todo.id)
                      obj2.status = e.target.checked;
                    return obj2;

                  }))
                }} type="checkbox" name="" id="" />
                <p>{todo.text}</p>
              </div>
              <div className="right">
              </div>
            </div>
          )
          )
        }

        <div className="subHeading">
          <br />
          <h2>Completed Tasks 💪 </h2>
        </div>
        {
          ToDos.map((todo) => {
            if (todo.status) {
              return (
                <div className='input'>
                  <input type='text' placeholder={todo.text}></input>
                </div>
              )
            }
            return null;
          }

          )
        }
      </div>


    </div >
  );
}

export default App;