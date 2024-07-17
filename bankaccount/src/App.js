
import './App.css';
import Header  from "./Header";
import Main from './Main';
import Button from './Button';
import { useReducer } from 'react';

const initialState= {
  openAccount : false,
  isActive : true,
  activeLoan : false,
  balance: 0,
  loan : 0

}

function reducer (state, action) {

  switch(action.type){
   
    case "openAccount" : 
    return {
      ...state , openAccount : action.payload , isActive : false , balance : 500
    }

    case "deposit":
      return {...state, balance : state.balance + 150}

    case "withdraw":
      return {...state, balance: state.balance - 50}  

    case "loan":
      return {...state,balance: state.activeLoan ? state.balance : state.balance + 5000 , loan :  5000   , activeLoan: true, }  

    case "payLoan":
      return {...state, activeLoan: false, balance : state.balance - 5000 , loan :  0 }  
    case "closeAccount":
      if((state.loan + state.balance) === 0 )
      return {...initialState}
    else return {...state}  
    default:
      throw new Error("error")
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const {openAccount , isActive , balance , loan} = state
  return (
    <div className="App">
      <Header />

      <Main balance={balance} loan={loan}/>

      <Button dispatch={dispatch}  openAccount ={openAccount} isActive={isActive} />

     
    </div>
  );
}

export default App;
