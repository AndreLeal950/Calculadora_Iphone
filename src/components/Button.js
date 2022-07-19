import React from 'react'

const Button = () => {
    return (
      <>
    <div className='button' >   
        
        <h2 className='display'>0</h2>
        
      <button className='gray' >AC</button>
      <button className='gray'>+/-</button>
      <button className='gray' >%</button>
      <button  className='orange'>/</button>
      <button id='button'>7</button>
      <button id='button'>8</button>
      <button id='button' >9</button>
      <button className='orange' >X</button>
      <button id='button' >4</button>
      <button id='button' >5</button>
      <button id='button' >6</button>
      <button className='orange'>-</button>
      <button id='button' >1</button>
      <button id='button' >2</button>
      <button id='button' >3</button>
      <button className='orange' >+</button>
      <button className='zero' >0</button>
      <button id='button' >,</button>
      <button className='orange' >=</button>
    </div>
  </>    
  )
}

export default Button
