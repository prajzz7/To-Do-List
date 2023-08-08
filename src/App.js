import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Logo from './components/logo/Logo';
import List from './components/list/List';

const getLocalStorageList = () => {
  let list1 = localStorage.getItem('lists')
    if(list1){
      
      return (list1 = JSON.parse(localStorage.getItem('lists')))
    }
    else{
      return []
    }
    //console.log(list)
  }

function App() {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState(getLocalStorageList())
  const [editTodo, setEditTodo] = useState(0)
  const [itemTemp, setItemTemp] = useState('')

  let editItem = []
  useEffect(()=>{
      
      localStorage.setItem('lists',JSON.stringify(todo))
      
    },[todo])

 
  // const submitTodoHandler = (data) => {
  //   const todoObj = {
  //     ...data
  //   }
  //   console.log(todoObj)
  // }

  return (
    <div className="app">
      <div className="container">
        <Logo/>
        <Form 
          text = {text}
          setText= {setText}
          todo = {todo}
          setTodo = {setTodo}
          editTodo = {editTodo}
          setEditTodo = {setEditTodo}
          // getLocalStorageList = {getLocalStorageList}
        />
        <List 
          text = {text}
          setText= {setText}
          todo = {todo}
          setTodo = {setTodo}
          editTodo = {editTodo}
          setEditTodo = {setEditTodo}
          
        />
      </div>
    </div>
  );
}

export default App;
