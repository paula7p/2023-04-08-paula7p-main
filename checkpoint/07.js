const { LinkedList } = require('../DS');

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

7️⃣ ***** EJERCICIO 7 - LinkedList ***** - encontrarPedidoRepetido() 7️⃣

Estamos trabajando en un bar y hay pedidos repetidos. Debemos realizar un algoritmo que nos ayude a 
encontrar dichos pedidos y guardarlos en una nueva LinkedList.
Para esto nos ayudaremos del nombre que figura en el ticket, he iremos comparando con el nombre que 
nos pasan por parámetro.

⛔️ IMPORTANTE ⛔️
1) Tienes que retornar una nueva LinkedList con los elementos que coincidan con el número recibido por parámetro.
2) Si no se encuentran elementos con el mismo nombre, debes retornar false.
3) No te olvides de comparar el nombre que figura en cada ticket con el nombre que te pasan por props y no el trago.

📝 EJEMPLO 📝
LISTA ---> Head ➡ ({nombre: "Franco", trago: "Fernet"}) ➡ ({nombre: "Martin", trago: "Gancia"}) ➡ ({nombre: "Franco", trago: "Fernet"}) ➡ ({nombre: "Mateo", trago: "Cerveza Corona"}) ➡ ({nombre: "Nico", trago: "Negroni"}) ➡ ({nombre: "Ale", trago: "Cerveza IPA"})
INPUT ---> "Franco"
OUTPUT --> Head ➡ ({nombre: "Franco", trago: "Fernet"}) ➡ ({nombre: "Franco", trago: "Fernet"})
*/

LinkedList.prototype.encontrarPedidoRepetido = function (nombre) {
   // Tu código aquí:
      let encontrado = false;
      let nodoActual = this.head;
      let nuevaLista = new LinkedList();
      
      while (nodoActual !== null) {
        if (nodoActual.value.nombre === nombre) {
          encontrado = true;
          nuevaLista.add(nodoActual.value);
        }
        nodoActual = nodoActual.next;
      }
      
      if (encontrado) {
        return nuevaLista;
      } else {
        return false;
      }
    }
    
      

// ⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️
module.exports = LinkedList;
