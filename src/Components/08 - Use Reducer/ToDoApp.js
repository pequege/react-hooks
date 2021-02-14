import React, {useEffect, useReducer} from 'react'
import { todoReducer } from "./todoReducer";
import "./style.css";
import { UseForm } from '../../Hooks/UseForm';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const ToDoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{description}, handleInputChange, reset] = UseForm({
    description: ''
  });

  useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos]);

  const handleDelete = (todoId) =>{
    console.log(todoId)
    const action = {
      type: 'delete',
      payload: todoId
    }
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: 'toggle',
      payload: todoId
    }
    dispatch(action)
  }

  const handleSubmit = (e) =>{

    if(description.trim().length <= 1){
      return;
    }

    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);
    reset();
  }

  return (
    <div>
      <h2>To Do App({todos.length})</h2>
      <hr/>
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {
              todos.map((todo,i) =>(
                <li key = { todo.id }
                  className="list-group-item"
                >
                  <p className={`${todo.done && 'complete'}`}
                  onClick={() => handleToggle(todo.id)}>
                    {i+1} . {todo.desc}
                  </p>
                  <button className="btn btn-danger" onClick={ () => handleDelete(todo.id) }>Borrar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar To do</h4>
          <hr/>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender..."
              autoComplete="off"
              onChange= {handleInputChange}
              value={ description }
            />
            <button className="btn btn-outline-primary mt-1 btn-block" type="submit">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
