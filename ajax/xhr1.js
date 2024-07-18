const url = "https://jsonplaceholder.typicode.com/users"

const xhr = new XMLHttpRequest()

function myaxios (method , url , body = null) {

    return new Promise ((resolve , reject) => {
        xhr.open(method , url)
           
        xhr.responseType = "json"

        xhr.setRequestHeader('content-type' , 'application/json')

        xhr.onload = () => {

            if (xhr.status > 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }


         xhr.send(JSON.stringify(body))

         xhr.onerror = () => {
            reject(xhr.response)
         }

    })



}


myaxios("POST" , url , {
    name : "ahmed" ,
    age : 20
} ).then((res) => {
    console.log(res);
})