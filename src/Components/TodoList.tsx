import React from 'react'
import {Todo} from './Model'
import SingleTodo from './SingleTodo'
interface props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    
}
const TodoList:React.FC<props> = ({todos,setTodos}) => {
  return (
   
          <div className={`todos`}>
           
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
           
          </div>
        )}
     
     
  


export default TodoList
