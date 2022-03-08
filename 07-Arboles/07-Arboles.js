const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo (error de enunciado, en realidad quiere el valor y no el nodo). En caso contrario retornar el mensaje correspondiente.
BinarySearchTree.prototype.search= function(valor){
/*
	if ( valor === this.value ) return this.value; 
	if ( this.right?.search(valor) ) return this.value;
	if ( this.left?.search(valor) ) return this.value;

	return "no se encontró el valor";
*/
	if ( valor === this.value ) return this.value; 

	if ( valor > this.value ) {
		if ( !this.right ) return "no se encontró el valor"; 
		return this.right.search(valor)
		};
	if ( valor < this.value ) {
		if ( !this.left ) return "no se encontró el valor";
		return this.left.search(valor)  
		};

};


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)  (9)  (11)  (15)   ----> nivel 2

BinarySearchTree.prototype.height= function(){

	if(!this.left && !this.right){
		return 0;
	}else{
		if (this.left && !this.right) return this.left.height() + 1;
		if (!this.left && this.right) return this.right.height() + 1;
		return Math.max(this.left.height() + 1, this.right.height() + 1 );
	};
};




module.exports={
    BinarySearchTree
}