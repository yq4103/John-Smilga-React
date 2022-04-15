import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'eevee',
    age: 2,
    message: 'meow'
  });

  const {name, age, message} = person;
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={()=>{
        setPerson({...person, message: 'wawa'})
      }}>Change message</button>
    </>
  )
};

export default UseStateObject;
