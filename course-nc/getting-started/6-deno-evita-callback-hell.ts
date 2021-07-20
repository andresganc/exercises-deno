
// Deno ya incluye las promesas y el uso de async/await de abrica y ya no se caera en el famoso codigo callback hell (Codigo Piramide)

// Deno elimina los CallBack Hell (Anidaciones excesivas) con los asynawait
// Anteriormente con NodeJS habia que encapsular en un asiynawait
// Ahora con Deno y await eliminamos este problema.

// Deno al ser seguro no deja correr conexiones remotas, Ejecutar ficheros o Acceder a entornos desconocidos tan facilmente.
// Si desea correr una conexion remota de una API desconocida con Deno. Debe agregar --allow-net
// Ejemplo $ deno run --allow-net miarchivo.ts


function httpClient(resource, cb) {
    const baseURL = 'http://domain.com/api/'
    return $.get(baseURL + resource, cb)
}

// Así luce el callback hell

httpClient('users/1' function (user) {
    httpClient('posts/' + user.id, function (post) {
        httpClient('coments/' + post.id, function (comment) {
            httpClient('likes/' + comment.id, function (like) {
                httpClient('anotherResource/' + like.id, function (data) {
                    console.log(data)
                })
            })
        })
    })
})