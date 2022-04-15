import React, { useState } from 'react';

const UseStateBasics = () => {
  let [title, setTitle] = useState('Random title');

  const handle = ()=>{
    if (title === 'Random title') {
      setTitle('Changed Title');
    } else {
      setTitle('Random title');
    }
  }

  return <>
    <h2>{title}</h2>
    <button className='btn' onClick={handle}>Change title</button>
  </>
};

export default UseStateBasics;
