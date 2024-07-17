import React from 'react'

const Button = ({dispatch , openAccount ,isActive}) => {

  //USErEDUCER BANK

  return (
      <div className='App btn' >
      <button disabled ={openAccount} onClick={() => dispatch({type : "openAccount" , payload: true })} > Open Account  </button>                                                                                                                                                             <br></br><br></br>
      <button disabled ={isActive} onClick={() => dispatch({type : "deposit"})} >Deposit 150</button>                                                                                                                                                             <br></br><br></br>
      <button disabled ={isActive} onClick={() => dispatch({type : "withdraw"})}  >Withraw 50</button>                                                                                                                                                                 <br></br><br></br>
      <button disabled ={isActive} onClick={() => dispatch({type : "loan"})} >Request a loan of 5000</button>                                                                                                                                                          <br></br><br></br>
      <button disabled ={isActive} onClick={() => dispatch({type : "payLoan"})} >Pay loan</button>                                                                                                                                                                                <br></br><br></br>
      <button disabled ={isActive} onClick={() => dispatch({type : "closeAccount"})} >close account</button>                                                                                                                                                                                <br></br><br></br>
    </div>
  )
}

export default Button