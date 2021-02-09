import React from 'react'
import { UseCounter } from '../../Hooks/UseCounter';
import { useFetch } from '../../Hooks/useFetch';
import '../02 - UseEffect/Effects.css';

export const MultipleCustomHooks = () => {

  const { counter, increment } = UseCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h2>Breaking Bad Api</h2>
      <hr/>
      {
        loading?
        (
          <div className="alert alert-info text-center">
            Loading...
          </div>
        )
        :(
          <blockquote className="blockquote text-right">
            <p className="mb-2">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )
      }
      <button className="btn btn-primary" onClick={ increment }>
        Siguiente
      </button>
    </div>
  )
}
