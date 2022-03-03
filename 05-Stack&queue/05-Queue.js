const { Queue } = require("../estructuras");
// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
    // Tu código aca:
    let tickPass = [], ingresan = [];

    for (let i = 0; i < queue.array.length; i++) {
    	if (queue.array[i].age >= 18 && 
    		queue.array[i].ticket.event ==  event &&
    		!tickPass.includes(queue.array[i].ticket.number) ) {
    		ingresan.push(queue.array[i].fullname);
    		tickPass.push(queue.array[i].ticket.number);
    	}
    };

    var newQueue = new Queue();

   	for (let i = 0; i < queue.array.length; i++) {
   		if (ingresan.includes(queue.array[i].fullname)) {
   			newQueue.enqueue(queue.array[i])
   		}
   	};  
   while (queue.size() > 0) {
     queue.dequeue()
   };
   queue = newQueue;
console.log(queue)
   return ingresan;
  };
      
  



  module.exports = {
    controlAcces,
   
}