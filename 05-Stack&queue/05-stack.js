const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado: raM odaluzA


function efectoEspejo(str){  
//tu codigo aqui
let pila = new Stack;

for (var i = 0; i < str.length; i++) {	
	pila.push(str[i]); 
};
let str2 = '';

for (var i = 0; i < str.length; i++) {
	str2 += pila.pop();
};
let arr = str2.split(' ');

for (var i = 0; i < arr.length; i++) {
	pila.push(arr[i]);
};
let arr2 = [];

for (var i = 0; i < arr.length; i++) {
	arr2.push(pila.pop());
};

return arr2.join(' '); 
 
};








module.exports = {
    efectoEspejo,
   
}