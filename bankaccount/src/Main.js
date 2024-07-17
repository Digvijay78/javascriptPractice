import React from 'react'

const Main = ({balance , loan}) => {
  return (
    <div className='app' >
       <h2> 
         Balance: {balance}
        </h2>
        <h2>

        Loan : {loan}
        </h2>

    </div>
  )
}

export default Main