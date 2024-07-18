const url = "https://jsonplaceholder.typicode.com/users"


async function myaxios (method , url , body = null) {


    const header = {
        'content-type' : "application/json"
    }

    const response = await fetch(url , {
        method : method,
        headers  : header,
        body : JSON.stringify(body)
    })
    const data = await response.json()
    return data
}

// myaxios("GET" , url).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


myaxios("POST" , url , {
    name : "sara",
    email : "sara@gmail.com"
}).then((res) => {
    console.log(res);
})