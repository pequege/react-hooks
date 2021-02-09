import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setcoords] = useState({x: 0, y: 0});
  const {x, y} = coords;

  useEffect(() => {


    const mouseEvent = (e) => {
      const coords = {x: e.x, y: e.y};
      setcoords( coords );
    }

    window.addEventListener('mousemove', mouseEvent);
    // console.log('Componente montado')
    return () => {
      window.removeEventListener('mousemove', mouseEvent);
    }
  }, [])

  return (
    <>
      <h3>Eres Genial</h3>
      <p>x: {x} y: {y}</p>
    </>
  )
}
