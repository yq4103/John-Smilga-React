import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');
  
  useEffect(()=>{
    fetch(url)
    .then((resp)=> {
      if(resp.status >= 200 && resp.status <= 299) {
        return resp.json();
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText)
      }
    })
    .then((user)=> {
      const { login } = user;
      setUser(login);
      setIsLoading(false);
    })
    .catch((error)=> console.log(error));
  },[]);

  // const getUser = async() => {
  //   const resp = await fetch(url);
  //   const object = await resp.json();
  //   const user = await object.login;
  //   setUser(user);
  // };

  // useEffect (()=> {
  //   getUser();
  // }, []);

  if(isLoading) {
    return <h1>loading...</h1>
  };

  if(isError) {
    return <h1>error...</h1>
  };

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
