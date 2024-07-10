import React, { useState } from "react"

const Header = ({country1}) => {

    const [name , setName] = useState("Deepika")

    let name2 = "Aryan"

    // console.log(props);

    const handleChange = () => {
        country1 = "USA"
        setName(prevName => "suresh")
    }
    

    return (
         <div>
            {/* <h1> Hii, {name2} constant </h1> */}
            <h1> Hii, {name} useState I am from {country1} </h1>
            {/* <button onClick={() => {name2 = " suresh"}} > Chnage name constant </button> */}
            <button onClick={handleChange} > Chnage name useState </button>
         </div>
    )
}

export default Header