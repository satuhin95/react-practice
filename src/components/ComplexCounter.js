import React, { useReducer } from 'react'

export default function ComplexCounter() {
    const initialState = {
        counter :0
    };
    const reducer = (state, action)=>{
                switch(action.type){
                    case 'increment':
                        return {counter : state.counter + action.value};
                    case 'decrement':
                        return {counter : state.counter - action.value};
                    default:
                        return state;        
                }
    }
    const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <h2>Complex Counter</h2>
        <p>Counter {count.counter}</p>
        <button type='button' onClick={()=>dispatch({type:'increment',value :1})}>Increment By 1</button>
        <button type='button' onClick={()=>dispatch({type:'increment',value :5})}>Increment By 5</button><br/>
        <button type='button' onClick={()=>dispatch({type:'decrement', value: 1})}>Decrement By 1</button>
        <button type='button' onClick={()=>dispatch({type:'decrement',value: 5})}>Decrement By 5</button>
    </div>
  )
}
