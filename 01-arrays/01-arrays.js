//npm test 01-arrays.test

function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let arrFilt = array.filter( x => x < 10 );
    let arrRev = [];
    arrFilt.forEach( x => arrRev.unshift(x) );
    return arrRev;

}

function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    let arrFilt =  array1.filter( x => array2.includes(x) );

    if (arrFilt.length === 0) {
        array1.sort( (a,b)=> a-b );
        array2.sort( (a,b)=> a-b );
        return (array2[0] < array1[0]) ? array2[0] : array1[0]
    }

    return arrFilt[0];
};



function sumaDeArrays(array, arr2 = []) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.

    for (let e of array) {
        (Array.isArray(e)) ? arr2.push(e[0]+e[1]) : arr2.push(e)
    }
    return arr2;
};



function mismoValorMismosElementos(numero, divisor, arr=[]) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    if (numero % divisor !== 0) return false;

    let count = divisor;

    while (count > 0) {
        count--;
        arr.push(numero/divisor)
    };
    return arr; 
};


function elementoMenorYMayor(array, arr2=[]) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    array.sort( (a,b) => a-b );
    arr2.push(array[0], array[array.length-1])
    return arr2;
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};