import React, { useState } from 'react'


import '../styles/components/button.sass'


const Button = () => {

  const [num, setNum] = useState(0)
  const [oldnum, setOldNum] = useState()
  const [operator, setOperator] = useState()
    
  
  function inputNum(e) {
    const input = (e.target.value)
    if (num === 0) {
      
        setNum(input)

    } else {
            setNum(num + input)
    }
    }
    
    function clear() {
        setNum(0)
    }

    function porcentagem() {
        setNum( num / 100)
    }

    function chargeSign() {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
  }

  function operateHandle(e) {
    let operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
    
  }
  
  function calculate() {
    if (operator === "/") {

        setNum(oldnum / num)
    } else if (operator === "*") {

        setNum(oldnum * num)     
    } else if (operator === "-") {
      
        setNum(oldnum - num)
    } else {
        setNum(parseFloat(oldnum) + parseFloat)
    }
  }
    return (
      <>
    <div className='button' >   
        
      <h2 className='display'>{ num }</h2>
        
      <button className='gray' onClick={clear} >AC</button>
      <button className='gray' onClick={chargeSign}>+/-</button>
      <button className='gray' onClick={porcentagem} value='%' >%</button>
      <button  className='orange' onClick={operateHandle} value='/'>/</button>
      <button id='button' onClick={inputNum} value='7'>7</button>
      <button id='button' onClick={inputNum} value='8'>8</button>
      <button id='button' onClick={inputNum} value='9'>9</button>
      <button className='orange' onClick={operateHandle} value='*'>X</button>
      <button id='button' onClick={inputNum} value='4'>4</button>
      <button id='button' onClick={inputNum} value='5'>5</button>
      <button id='button' onClick={inputNum} value='6'>6</button>
      <button className='orange' onClick={operateHandle} value='-'>-</button>
      <button id='button' onClick={inputNum} value='1'>1</button>
      <button id='button' onClick={inputNum} value='2'>2</button>
      <button id='button' onClick={inputNum} value='3'>3</button>
      <button className='orange' onClick={operateHandle} value='+'>+</button>
      <button className='zero' onClick={inputNum} value='0'>0</button>
      <button id='button' onClick={inputNum} value='.'>,</button>
      <button className='orange' onClick={calculate} value='='>=</button>
    </div>
  </>    
  )
}

export default Button
