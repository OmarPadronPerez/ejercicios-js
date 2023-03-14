console.log( "prueva 1: "+ ( solution([6, 2, 3, 8])==3 ) );
console.log( "prueva 2: "+ ( solution([ 0, 3 ])==2 ) );
console.log( "prueva 3: "+ ( solution([5, 4, 6])==0 ) );
console.log( "prueva 4: "+ ( solution([1])==0 ) );
console.log( "prueva 5: "+ ( solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])==0 ) );

function solution(statues) {
    //es necesario declarar el orden numerico natural para ordenar de forma correcta
    const naturalOrder = (a, b) => a - b;
    let arr = statues.sort(naturalOrder);

    let faltan = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = arr[i]; (j+1) < arr[i + 1]; j++) {
            console.log(j+"/"+(arr[i + 1]));
            faltan++;
        }
    }
    return faltan;
}