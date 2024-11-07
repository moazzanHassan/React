import React from 'react'

const Product = ({water,bio}) => {
  return (
    <>
    
    <h1>{water}</h1>
     <h2>{bio.name}</h2> 
    <h2>{bio.age}</h2>
    <h2>{bio.gender}</h2>
    <h2>{bio.city}</h2> 

    

    </>
  )
}

export default Product