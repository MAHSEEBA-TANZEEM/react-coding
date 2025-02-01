import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const id = useParams().productId;
  console.log(id);
  return (
    <div>Product
      <p>The product id is: {id} </p>
    </div>
  )
}

export default Product