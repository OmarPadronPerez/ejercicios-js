console.log("en js");
//token: f86511f0efa7d60e0fc1771acc92aeab
//

function obtenerLista(){
    var myHeaders = new Headers();
    myHeaders.append("apikey", "g5DxRBJ4jD36Yg9iUgpr3WOsHXYv4r5s");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch("https://api.apilayer.com/currency_data/list", requestOptions)
        .then((res) => res.json())
        //.then(result => console.log(result))
        .then(result => {return result;})
        .catch(error => console.log('error', error));
}

console.log(obtenerLista());