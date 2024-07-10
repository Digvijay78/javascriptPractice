import React, { useEffect, useState } from 'react'
import HOC from './HOC'

const Todos = ({data}) => {

//     const [todos , setTodos] = useState([])
//     const [term, setTerm] = useState("")

//     useEffect(() => {

//         const fetchTodos = async () => {
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//             const json = await response.json()
//             setTodos(json)
//             console.log(json);
//         }

//         fetchTodos();

//     }, [])

//   const filterTodos = todos.slice(0,10).filter(({title}) => {
//     // return title.indexOf(term) >= 0
//     return title.toLowerCase().indexOf(term.toLowerCase()) 

//   }).
  
let renderTodos = data.map((el) => {
    return <li key={el.id}>{el.title}</li>
  })

  return (
    <div>
        <h1>Todos</h1> 

        {/* <input type = "text" value =  {term}  onChange={(e) => setTerm(e.target.value)} /> */}
          
          {renderTodos}
        
        </div>

  )
}

const SearchTodos = HOC(Todos, 'todos')

export default SearchTodos