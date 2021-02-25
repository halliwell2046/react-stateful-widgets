import React, { useState } from 'react';


export default function Todo() {
    
    const [ inputValue, setInputValue ] = useState('') 

    const changeInput = evt => {
      
        const { value } = evt.target;
    
        
        setInputValue(value)
      };
    return (
        <div className= 'widget-programmers container'>
            <h2>To Do List</h2>
        <header>
            <form id="to-do-form">
                <input type='text' placeholder="Enter Text" onChange={changeInput} value={inputValue}/>
                <button type='submit'>Add</button>
            </form>
        </header>
        </div>
    );
}

