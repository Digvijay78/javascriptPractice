

// GET REQUEST
// const api = "https://jsonplaceholder.typicode.com/users"

// function myaxios (method , api , body = null){


//     const xhr = new XMLHttpRequest();


//     xhr.open(method , api)

//     xhr.responseType = 'json'

//     xhr.setRequestHeader('content-type' , 'application/json')

//     xhr.onload = () => {

//         if(xhr.status >= 400){
//             console.log('Failed');
//         } else{

//             console.log(xhr.response);
//         }
//     }

//     xhr.onerror = () => {
//         console.log('Error');
//     }

//     xhr.send(JSON.stringify(body))

// }
    
// // myaxios("GET" , api )
// // -------------------------------------------------------

// // PUT REQUEST

// myaxios("POST" , api , {
//     name : "DIGVIJAY",
//     role : "software developer"
// })