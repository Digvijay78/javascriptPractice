import React, { useEffect, useState } from 'react'
import HOC from './HOC'

const UserList = ({data}) => {

    // const [user , setUser] = useState([])
    // const [term , setTerm] = useState("")

    // useEffect(() => {

    //     const fetchUser = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users')

    //         const data = await res.json()
    //         setUser(data)
    //         // console.log(data);
    //     }

    //     fetchUser();
    // },[])

    // const showName = user.filter(({name}) => {
    //        return name.indexOf(term) >= 0
    // }).map((el) => {
    //     return <li key={el.id}>{el.name}</li>
    // })

      const renderUser = data.map(el => {
        return <li key = {el.id} > {el.name} </li>
})
  return (
    <div>
        <h1>User List</h1>

        {/* <input type='text' value = {term} onChange={(e) => setTerm(e.target.value) }  /> */}

        {/* <ul>
            {user.map(el => {
                return <li key = {el.id} > {el.name} </li>
            } )}

        </ul> */}

        {renderUser}


    </div>
  )
}

const SearchUser = HOC(UserList, "users")

export default SearchUser