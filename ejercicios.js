var assert = require('assert');

// var array = [15, 47, 14, 42, 31,
// 81, 4, 14, 77, 82,
// 25, 13, 18, 14, 33,
// 10, 64, 43, 41, 5,
// 59, 31, 15, 80, 26,
// 66, 50, 35, 77, 46,
// 98, 26, 42, 8, 76,
// 60, 81, 78, 45, 86,
// 69, 37, 75, 76, 20,
// 32, 78, 4, 55, 8,
// 89, 62, 50, 13, 74,
// 94, 86, 51, 36, 42,
// 87, 17, 42, 25, 35,
// 90, 57, 77, 60, 29,
// 14, 60, 57, 81, 26,
// 46, 99, 47, 65, 61,
// 63, 15, 72, 38, 71,
// 67, 29, 72, 25, 33,
// 70, 63, 23, 33, 84,
// 91, 26, 31, 59, 1]

// array.sort(function(a, b){return a-b});

// ////////ENCONTRAR EL MAXIMO////////////////////

// array.sort(function(a, b){return b-a});

// ///////////
// var resultado= 0
// for (var i = 0; i < array.length; i++) {
// 		resultado+= array[i];
// }

// ///////PROMEDIO
// var resultado= 0
// for (var i = 0; i < array.length; i++) {
// 		resultado+= array[i];
// }
// var resultadoprom= resultado/array.length
// console.log('prom',resultadoprom)
// //////////Varianza y desviacion estandar
// var varianza=0
// for (var i = 0; i < array.length; i++) {
// 	varianza+= Math.pow((array[i]- resultadoprom),2);
// }
// console.log('var',varianza)
// var varianzaPosta= varianza/array.length

// console.log('varianzaPosta',varianzaPosta)

// var desviacion = Math.sqrt(varianzaPosta)
// console.log(desviacion)

// /////Ejercicio 2

// function Node(data) {
//     this.data = data;
//     this.next = null;
// }
// function Pila() {
//     this._length = 0;
//     this.head = null;
// }

// Pila.prototype.insert= function(value){
// 	var node= new Node(value);
// 	var current= this.head;
// 	if(!current){
// 		this.head=node;
// 		this._length++;
// 	} else{
// 		node.next=current;
// 		this.head=node;
// 		this._length++;
// 	}
// 	return this;
// }

// Pila.prototype.pop= function(){
// 	var popped= this.head
// 	this.head = this.head.next
// 	this._length--
// 	return popped.data
// }

// Pila.prototype.getAll= function(){
// 	var actual=this.head;
// 	if(!actual){
// 		console.log("La lista esta vacia")
// 	}
// 	while(actual){
// 		console.log(actual.value) 		 
// 		actual = actual.next;
// 	}
// }

// Pila.prototype.len= function(){
// 	//console.log(this._)
// 	return this._length
// }

// Pila.prototype.invertir= function(value){
// 	for (var m = 0; m < value.length; m++) {
// 		this.insert(value[m]);
// 	}
// 	var count= 0;
// 	var reversed=[]
// 	while(count < value.length){
// 		reversed.push(this.pop())
// 		count++
// 	}
// 	return reversed;
// }

// var stack = new Pila();

// stack.insert(1);
// assert.equal(stack.pop(), 1, 'No funciona Pop');
// assert.equal(stack.len(), 0, 'No cuenta bien los elementos 1');

// stack.insert(1);
// stack.insert(2);
// stack.insert(3);
// assert.equal(stack.len(), 3, 'No cuenta bien los elementos 2');

// var array = [1, 2, 3, 4];

// inversedArray = stack.invertir(array);
// assert.deepEqual(inversedArray, [ 4, 3, 2, 1 ], 'No invierte bien.');

/////Tomamos la function de NOde que hicimos en el ejercicio anterior y definimos lista:
// function Node(data) {
//     this.data = data;
//     this.next = null;
// }


// function Lista() {
//     this._length = 0;
//     this.head = null;
// }

// Lista.prototype.insert= function(value){
// 	var node= new Node(value);
// 	var current= this.head;
// 	if(!current){
// 		this.head=node;
// 		this._length++;
// 	} else{
// 		node.next=current;
// 		this.head=node;
// 		this._length++;
// 	}
// 	return this;
// }

// Lista.prototype.getAll= function(){
// 	var actual=this.head;
// 	if(!actual){
// 		console.log("La lista esta vacia")
// 	}
// 	while(actual){
// 		console.log(actual.data) 		 
// 		actual = actual.next;
// 	}
// }

// Lista.prototype.get= function(index){
// 		var actual= this.head;
// 		var count = 0;
// 		while(count<index) {
// 			// if(count==0){actual=this.head}
// 			actual = actual.next;
// 			count++
// 		}
// 		console.log(actual.data)
// 		return actual.data;
// 	// } 
// }

// Lista.prototype.getFirst= function(){
// 	this.head= this.head.next;
// 	this._length--
// 	return this
// }

// Lista.prototype.pop= function(){
// 	var current= this.head
// 	if(current.next==null){
// 		current=null		
// 		this._length--
// 		return current			
// 	}
// 	while(current){
// 		if(current.next.next==null){
// 			var guardado= current.next;
// 			current.next= null;
// 			this._length--
// 			return guardado.data
// 		}
// 	current= current.next
// 	// console.log(current)
// 	}
// }

// Lista.prototype.find= function(value){
// 	var current= this.head
// 	var result=""
// 	while(current){
// 		if(current.data===value){
// 			result= value
// 		} else {
// 			result= null
// 		}
// 	current= current.next
// 	}
// 	console.log(result)
// 	return result
// }
// var lista = new Lista();

// lista.insert(1);
// lista.insert(2);
// lista.insert(3);
// lista.insert(4);


// lista.getAll() // 1, 2, 3, 4

// assert.equal(lista.get(0), 4, 'No encontró el primer elemento');
// assert.equal(lista.get(3), 1, 'No encontró el ultimo elemento');

// assert.equal(lista.get(), 4, 'No sacó bien el primero');

// assert.equal(lista.pop(), 1, 'No sacó bien el último');

// assert.equal(lista.find(2), 2, 'No busca bien');
// assert.equal(lista.find(4), null, 'No busca bien');

//////Doblemente enlazadas

function Node(data) {
    this.data = data;
    this.next = null;
    this.previous= null;
}


function ListaD() {
    this._length = 0;
    this.head = null;
    this.pointer = this.head;
}

ListaD.prototype.insert= function(value){
	var node= new Node(value);
	var current= this.head;
	if(!current){
		this.head=node;
		this._length++;
	} else{
		current.previous= node
		node.next=current;
		this.head=node;
		this._length++;
	} 
	return this;
}

ListaD.prototype.getAll= function(){
	var actual=this.head;
	if(!actual){
		console.log("La lista esta vacia")
	}
	while(actual){
		console.log(actual.data) 		 
		actual = actual.next;
	}
}

ListaD.prototype.get= function(index){
		var actual= this.head;
		var count = 0;
		while(count<index) {
			actual = actual.next;
			count++
		}
		console.log(actual.data)
		return actual.data;
}

ListaD.prototype.getFirst= function(){
	this.head= this.head.next;
	this._length--
	return this
}

ListaD.prototype.pop= function(){
	var current= this.head
	if(current.next==null){
		current=null		
		this._length--
		return current			
	}
	while(current){
		if(current.next.next==null){
			var guardado= current.next;
			current.next.previous= null;
			current.next= null;
			this._length--
			return guardado.data
		}
	current= current.next
	}
}

ListaD.prototype.find= function(value){
	var current= this.head
	var result=""
	while(current){
		if(current.data===value){
			result= value
		} else {
			result= null
		}
	current= current.next
	}
	console.log(result)
	return result
}

ListaD.prototype.next= function(){
	this.pointer= this.pointer.next
	return this.pointer
}

ListaD.prototype.past= function(){
	this.pointer= this.pointer.previous
	return this.pointer
}

var lista = new ListaD();

lista.insert(1);
lista.insert(2);
lista.insert(3);
lista.insert(4);


lista.getAll() // 1, 2, 3, 4

assert.equal(lista.get(0), 4, 'No encontró el primer elemento');
assert.equal(lista.get(3), 1, 'No encontró el ultimo elemento');

assert.equal(lista.get(), 4, 'No sacó bien el primero');

assert.equal(lista.pop(), 1, 'No sacó bien el último');

assert.equal(lista.find(2), 2, 'No busca bien');
assert.equal(lista.find(4), null, 'No busca bien');
//////ARBOL

function NodeT(data) {
    this.data = data;
    this.rigth = null;
    this.left= null;
    this.parent= null;
}


function Tree() {
    this._level = 0;
    this.root=null;
}

Tree.prototyape.insert= function(value){
	var node= new NodeT(value)
	var current= this.root
	if(!this.root){
		this.root=node
	}else{
		while(current){
			if(value<=current.data){
				current=current.left;
			}else{
				current=current.rigth;
			}
		}
	current= node
	}
}

