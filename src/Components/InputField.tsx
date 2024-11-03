import React, { useRef } from 'react'
interface props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent) => void
}

const InputField:React.FC<props> = ({todo, setTodo, handleAdd}) => {
 const inputRef = useRef<HTMLInputElement>(null);   
  return (
    <form className='input'  onSubmit={(e) =>{
      handleAdd(e);
      inputRef.current?.blur();
      }}>
      <input type='input' value={todo} onChange={e => setTodo(e.target.value)} placeholder='Enter a task' className='input__box' ref = {inputRef}/>
      <button className='input__submit' type='submit'>GO</button>  
    </form>
  )
}

export default InputField
