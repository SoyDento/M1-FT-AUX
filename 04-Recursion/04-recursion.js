// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10
// producto([7, 2, 5]) devuelve 70
const producto = function (array, count = 1) {
  //escribe aqui tu codigo  
  if (array.length > 0) {

  		count *= array[0];
  		array.shift();
  		return producto(array, count);
  };
  return count;
};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }
// }
const isThere = function (obj, value) {
  //escribe aqui tu codigo

  let sol = [];
  
  let current = obj;
   	
  for (let key in current) {
  	 if (typeof current[key] == 'object'){
  	  			current = current[key];
  	  			return isThere(current, value);
  	 }
 	  if (current[key] == value)  sol.push(true);
 	  sol.push(false);
  }
  return sol.includes(true);		

};





module.exports = { producto, isThere };
