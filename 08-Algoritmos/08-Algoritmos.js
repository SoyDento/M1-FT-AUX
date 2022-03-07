'use strict'

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
   for(let i = 0; i<array.length; i++){
    for(let j = 0; j<array.length; j++){
      if(array[i] < array[j]){
         [array[i]  ,array[j]] = [array[j] , array[i]]
      }
    }
  };
  return array;
};



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length; i++) {

    var aux = array[i];
    var j = i - 1;

    while ( j >= 0 && aux < array[j]) {
      array[j+1] = array[j];
      j--
    }   
    array[j + 1] = aux;

   }
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let j = 0; j<array.length-1; j++){
    let min = j;
    for(let i = j+1; i<array.length; i++){
      if(array[i] < array[min]){
        min = i;
      }
    }
    if(j!==min){
      let aux = array[j]; 
      array[j] = array[min];
      array[min] = aux;
    }
  }
  return array;
};


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 1)  return [];

  let left = [];
  let right = [];
  let pivot = array[0];

  for(let i=1; i<array.length; i++){
    (array[i]> pivot) ? right.push(array[i]) : left.push(array[i])
  }; 

  return [].concat(quickSort(left), pivot, quickSort(right)); 
};


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1)  return array;

    let mid = Math.floor(array.length / 2);
    let mitad1 = array.slice(0, mid);
    let mitad2 = array.slice(mid);

  return merge(mergeSort(mitad1), mergeSort(mitad2));

};

function merge(mitad1, mitad2) {

    var mitad1Index = 0;
    var mitad2Index = 0;
    var merged = [];

    while (mitad1Index < mitad1.length && mitad2Index < mitad2.length) {

      if (mitad1[mitad1Index] < mitad2[mitad2Index]) {
                      merged.push(mitad1[mitad1Index]); mitad1Index++ 
                    } else { merged.push(mitad2[mitad2Index]); mitad2Index++}
    }
    return merged.concat(mitad1.slice(mitad1Index)).concat(mitad2.slice(mitad2Index))
  }

  



// No modificar nada debajto de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};