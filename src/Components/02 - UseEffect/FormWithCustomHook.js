import React from 'react';
import { UseForm } from '../../Hooks/UseForm';
import './Effects.css';


export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = UseForm({
    name: '',
    email: '',
    password: ''
  });

  const {name, email, password} = formValues;

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <form onSubmit = { handleSubmit }>
      <h1>Form with custom hook</h1>
      <hr/>
      <div className="form-group">
        <input type="text" name="name" className="form-control" placeholder="Nombre" autoComplete="off" value= {name} onChange={ handleInputChange }>
        </input>
      </div>
      <div className="form-group">
        <input type="text" name="email" className="form-control" placeholder="asd@mail.com" autoComplete="off" value= {email} onChange={ handleInputChange }>
        </input>
      </div>
      <div className="form-group">
        <input type="password" name="password" className="form-control" placeholder="******" value= {password} onChange={ handleInputChange }>
        </input>
      </div>
      <button type="submit" className="btn btn-primary" >Guardar</button>
    </form>
  )
}
