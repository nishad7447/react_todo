// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos,setTodos]=useState([])
  const [todo,setTodo]=useState('')
  console.log(todos)

  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>
          {(() => {
            const currentWeekday = new Date().toLocaleDateString(undefined, {weekday: 'long'});
            return `Whoop, it's ${currentWeekday} 🌝 ☕`;
          })()}
        </h2>
    </div>
    <div className="input">
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...todos,{id:Date.now(),text:todo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
     {
      todos.map((obj)=>{
        return(<>
         <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            setTodos(todos.filter(filterObj=>{
              if(filterObj.id===obj.id){
                filterObj.status=e.target.checked
              }
              return filterObj.id
            }))
            }} value={obj.status} type="checkbox" name="" id="" />
          <p className={obj.status ? "crossed-over" : ""}>{obj.text}</p>
        </div>
        <div className="right">
          <i onClick={()=>{
            setTodos(todos.filter((filterObj)=>filterObj.id!== obj.id))
            }} className="fas fa-times"></i>
        </div>
      </div>
        </>)
      })
     }

     {
      todos.map((obj)=>{
        if(obj.status){
          return(<h1 className='finished'>{obj.text}</h1>)
        }
        return null
      })
     }

    </div>
  </div>
  );
}

export default App;
