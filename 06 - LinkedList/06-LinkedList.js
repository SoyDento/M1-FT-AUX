const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size = function(){

    let count = 0;

    if (!this.head) return count;
      
    let pointer = this.head;

    while (pointer) {
      count += 1;
      pointer = pointer.next;
    };

    return count;
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
    // Tu código aca:
    if (!this.head) return null;

    if (head.value < head.next.value) {

      if (head.next.next) {
              let aux = head.next.next;
              let aux2 = head;
              head = head.next;
              head.next = aux2;
              head.next.next = aux;
          }
    };

    let current = this.head;

    while (current) {
      if (current.value < current.next.value) {

          if (current.next.next) {
              let aux = current.next.next;
              let aux2 = current;
              current = current.next;
              current.next = aux2;
              current.next.next = aux;
          }
      }
      current = current.next;
    }

  };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 0
   
  // 1-->2-->3-->2.5-->4   2.5 pos=1  newnodo= 2.5-->4   curr=3   
LinkedList.prototype.insert = function(data,pos) {


  if (this.len < pos) return this.add(data); 
  var newNodo = new Node(data);

  if (pos == 0) {
    newNodo.next = this.head;
    this.head = newNodo;
  };
  var current = this.head;

  while (pos > 0) {
    pos--;
    current = current.next;
  };
  newNodo.next = current.next;
  current.next = newNodo;
	
}
  




module.exports={
  LinkedList
}



