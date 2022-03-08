
const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size = function(){

 /*   let count = 0;

    if (!this.head) return count;
      
    let pointer = this.head;

    while (pointer) {
      count += 1;
      pointer = pointer.next;
    };
    return count;

   */ return this.len;
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function (arr = []) {
  
  this.recorrer((x)=> arr.push(x));

  arr.sort((a,b)=> b - a);

  this.head = null;

  arr.forEach((x)=> this.add(x))

};

 LinkedList.prototype.recorrer = function(cb) {
    
    if(!this.head) return null;
    
    var nodoActual = this.head;
  
    while (nodoActual !== null) {
      cb(nodoActual.value)
      nodoActual = nodoActual.next;
    }
  
  };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 0
   
  // 1-->2-->3-->2.5-->4   2.5 pos=1  newnodo= 2.5-->4   curr=3   
LinkedList.prototype.insert = function(data,pos) {


  if(this.len< pos) return this.add(data);

  let newNode= new Node(data);

  if(pos === 1){
    newNode.next = this.head;
    this.head = newNode;
  }else{
    let current = this.head;
    while (pos>1) {
      pos--;
      current=current.next;
    };
    newNode.next = current.next;
    current.next = newNode;   
  };
  this.len++;	
};
  




module.exports={
  LinkedList
}



