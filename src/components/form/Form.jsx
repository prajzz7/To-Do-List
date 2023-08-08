import React, { useEffect, useState } from 'react'
import './form.css'
import List from '../list/List'
import {v4 as uuidv4} from 'uuid';

const Form = ({text, setText, todo, setTodo, editTodo, setEditTodo, onSubmitTodo}) => {
  
  
  const handleChange = (e) => {
      setText(e.target.value)
  }
  const  addItem = async (e) => {
    e.preventDefault()
    if(!!editTodo){
      const editItem = todo.find((item)=> item.id === editTodo)     
      const updatedTodo = todo.map((item)=>{
        return item.id === editItem.id ? (item = {id: editTodo, title: text, completed: false}) : {id: item.id, title: item.title, completed: item.completed}
      })    
      setTodo(updatedTodo)     
      setEditTodo(0)
      setText('')


    }else{
      const uid = uuidv4()
      
      setTodo((prevTodo) => [{ id: uid, title: text, completed: false }, ...prevTodo]);
      
      
      //onSubmitTodo(todo)
      
      setText('')
    }
  }
   
  // useEffect(() => {
  //   //localStorage.setItem('lists', JSON.stringify(todo))
  //   localStorage.setItem('lists',JSON.stringify(todo))
    
  // },[todo])

  return (
    <>
    <div className='form-area'>
        <input className='text-write' type='text' placeholder='Add your items...' onChange={handleChange} value={text}></input>
        <button onClick={addItem} className='add-btn'>{editTodo?"EDIT":"ADD"}</button>
    </div>
    </>
  )
}

export default Form


