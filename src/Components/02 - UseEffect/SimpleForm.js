import React, { useEffect, useState } from 'react';
import { Message } from './Message'
import './Effects.css';


export const SimpleForm = () => {

  const [formState, setformState] = useState({
    name: '',
    email: ''
  });

  const {name, email} = formState;

  useEffect(() => {
    
  });

  const handleInputChange = ({target}) =>{
    setformState({
      ...formState,
      [target.name] : target.value
    });
  };

  return (
    <>
      <h1>Use Effect</h1>
      <hr/>
      <div className="form-group">
        <input type="text" name="name" className="form-control" placeholder="Nombre" autoComplete="off" value= {name} onChange={ handleInputChange }>
        </input>
      </div>
      <div className="form-group">
        <input type="text" name="email" className="form-control" placeholder="asd@mail.com" autoComplete="off" value= {email} onChange={ handleInputChange }>
        </input>
      </div>

      {(name == '123') && <Message/>}
    </>
  )
}
