import React from 'react';

const FormToDoList = ({setInputText, todos, setTodos, inputText, setStatus}) =>{

    const inputTextHandler = (e) => {
        
        setInputText(e.target.value);
        

    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000 }
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return(
    <form className='todolist-form'>
        <input 
            value={inputText} 
            onChange={inputTextHandler} 
            type="text" className="todo-input" required />
            <button 
                onClick={submitTodoHandler} 
                className="todo-button" 
                type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        <div className="select">
            <select className="todolist-selec filter-todo" onChange={statusHandler} name="todos">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    );
};

export default FormToDoList;