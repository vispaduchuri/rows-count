import React from 'react';
import Child from './Child'

const Parent = ()=>{
let parentState= [1,2,3,4,5]

  return (
    <>
    <p>Parent Array is {parentState}</p>
    <p>child new array is </p>
    {parentState.map((i,index)=>(
    <Child i={i}/>
    ))}
    </>
  )
}

export default Parent;
