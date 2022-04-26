import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [ text, setText ] = useState('');

  const [ isError, setIsError ] = useState(false);

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
    <h1>{text || 'no text'}</h1>
    <button className='btn' onClick={()=> setIsError(!isError)}>toggle error</button>
    {isError ? <p>Error...</p> : <p>No Error...</p>}
  </>;
};

export default ShortCircuit;
