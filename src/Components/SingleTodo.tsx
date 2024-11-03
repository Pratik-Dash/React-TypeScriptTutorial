import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './Model'
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
interface props{
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    index:number
}

const SingleTodo:React.FC<props> = ({todo, todos,setTodos}) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const [disabled,setDisabled] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    const handleDone = (id:number) => {
       
        setTodos(todos.map(todo => todo.id == id?{...todo, isDone:!todo.isDone}:todo));
        setDisabled(true);
        

     }
     const handleDelete = (id:number) => {
        setTodos(todos.filter(todo => todo.id !== id))
     }
const handleEdit = (id:number) => {

    
    setTodos(todos.map(todo => todo.id == id? {...todo,todo:editTodo}:todo))
    setEditMode(!editMode);
    console.log(editMode)
    console.log("handle edit invoked")
}
const handleKeyDown = (e:React.KeyboardEvent, id:number) => {

    if(e.key === "Enter"){
        e.preventDefault();
        handleEdit(id)
    }
}
   useEffect(() => {
    inputRef.current?.focus();
    
   },[editMode]) 
  return (
    
      
                <div className='todos__single'>
                {editMode?(<input ref = {inputRef} type='input' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='todos__single--text' onKeyDown={(e) => handleKeyDown(e, todo.id)}/>):
                (todo.isDone?
                <s className="todos__single--text">
                    {todo.todo}
                 </s>:<span className="todos__single--text">
                {todo.todo}
             </span>
                )}
             
             <div >
                <button className="icon" onClick={(e)=>{
                    e.preventDefault();
                    setEditMode(!editMode)
                    
                    }} disabled = {disabled} style={disabled?{cursor:"not-allowed"}:{}}><AiFillEdit/></button>
                <button className="icon" onClick = {() => handleDelete(todo.id)} disabled = {disabled}style={disabled?{cursor:"not-allowed"}:{}}><AiFillDelete/></button>
                <button className="icon" onClick={() =>handleDone(todo.id)} disabled = {disabled} style={disabled?{cursor:"not-allowed"}:{}}><MdDone/></button>
                </div>
            </div>
            )
        }
        
   
    
  


export default SingleTodo
