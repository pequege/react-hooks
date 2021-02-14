import React, { useRef } from 'react'
import '../02 - UseEffect/Effects.css'

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () =>{
    inputRef.current.select();
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>
      <input ref={inputRef} className="form-control" placeholder="Nombre"/>
      <button className="btn btn-outline-primary mt-5" onClick={ handleClick }> focus</button>
    </div>
  )
}
