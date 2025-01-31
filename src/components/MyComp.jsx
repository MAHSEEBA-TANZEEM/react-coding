import React from 'react';

const MyComp = ({number, fruitname}) => {
  return (
    <>
      <div>My first Comp</div>
      <h4>The value of num in MyComp is : {number} </h4>
      <h4>The value of fruit in MyComp is : {fruitname}</h4>
    </>
  )
}

export default MyComp;