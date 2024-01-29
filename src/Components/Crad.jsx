import React from 'react'


function Card({image,title}) {
  return (
    <div className='bg-white rounded-xl  text-black flex-col p-10 m-5'>
   
    <img src={image} alt=""/>
    <p >{title=""}</p>
    </div>
  )
}

export default Card 