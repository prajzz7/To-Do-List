import React, { useEffect, useState } from 'react'
import './list.css'
import {FaCheckCircle, FaCheck, FaEdit, } from 'react-icons/fa'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {BsCursor, BsFillBellFill} from 'react-icons/bs'


const List = ({ text, setText, todo, setTodo, editTodo, setEditTodo}) => {


  const deleteItem = (id) => {
    const delTodo = todo.filter((item)=> item.id !== id)
    setTodo([...delTodo])
  }
  const checkedList = (id) => {
    setTodo(todo.map((item)=>{
      if(item.id === id){
        item.completed = !item.completed
      }
      return item
    }))
  }
  const editList = (id) => {
    const editItem = todo.find((item)=>{
      return item.id === id
    } )
    setText(editItem.title)
    setEditTodo(id)
    
  }

  

  return (
    <div className='list-area'>
        <div className="list-item">
            {todo.map((td)=>(                      /*       (JSON.parse(localStorage.getItem('lists')))*/
                <ul key={td.id}>
                  <span  className={td.completed?'checked':'notChecked'}> {td.title} </span>
                  <div className='listBtns'>
                    <a className='icons' onClick={()=>checkedList(td.id)} ><FaCheckCircle /></a>
                    <a className='icons' onClick={()=>editList(td.id)}><FaEdit/></a>
                    <a className='icons' onClick={()=>deleteItem(td.id)} ><RiDeleteBin5Fill/></a>
                  </div> 
                </ul>
                
            ))}
        </div>
    </div>
  )
}

export default List