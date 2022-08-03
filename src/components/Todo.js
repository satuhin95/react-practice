import React, { useState } from 'react'

export default function Todo() {
    const [todo , setTodo] = useState();
    const [warning, setWarning] = useState(false);

  const  handleInput  = (e)=>{
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'You need Javascript skill to complate the task. Do you have it?': null;
                       
             setTodo(inputValue);
             setWarning(warning);         
    }
  return (
    <div>
        <p>{todo}</p>
        <textarea name='todo' value={todo} onChange={handleInput}></textarea>
        <p>{warning || 'Good Choice!'}</p>

    </div>
  )
}
