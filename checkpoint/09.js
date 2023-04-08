const { BinarySearchTree } = require('../DS');

/*  ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

9️⃣ ***** EJERCICIO 9 BINARYSEARCHTREE ***** - consultarTragos() 9️⃣

Eres el barman en un evento y un cliente se acerca a la barra a consultar qué tragos podría comprar con el 
efectivo que dispone. Deberás devolver según el efectivo disponible los tragos de la barra que salgan igual
o mas baratos.
Para esto tendrás que agregar al prototype de BinarySearchTree el método 🍹consultarTragos()🍹, el cual
recibirá por parámetro un número que representará el efectivo disponible para comprar tragos.

📝 EJEMPLO 📝
Dado el siguiente árbol - (INPUT) ➡ 
                          { nombre: "Gancia", precio: 400 }
                          /                             \
           {nombre: "Fernet", precio: 500}              {nombre: "Malibu", precio: 400}
                       /                               /                            \
           {nombre: "Agua", precio: 200}    {nombre: "Long Island", precio: 400}     {nombre: Martini, precio: 800}
                          \                                                           \
                {nombre: "Bailey", precio: 900}                                     {nombre: "Tom Collins", precio: 1000}
                           \
                {nombre: "Caipi", precio: 700}


BinarySearchTree.consultarTragos(400) ➡ (OUTPUT)
  ["Gancia","Agua","Malibu","Long Island"]

BinarySearchTree.consultarTragos(Camiseta) ➡ (OUTPUT)
  ["Camiseta", "Camiseta"]

REQUISITOS
  🟢 Recorrer el árbol y devolver en un arreglo con los tragos disponibles.

⛔️ ACLARACIÓN: Dentro del árbol se encuentran objetos, tal como lo muestra el ejemplo más arriba.
⛔️ TIP: puedes utilizar default parameters para ayudarte.
*/

BinarySearchTree.prototype.consultarTragos = function (efectivo) {
   // Tu código aquí:
    const tragosDisponibles = [];
  
    function inOrder(node) {
      if (node === null) {
        return;
      }
      inOrder(node.left);
      if (node.value.precio <= efectivo) {
        tragosDisponibles.push(node.value.nombre);
      }
      inOrder(node.right);
    }
  
    inOrder(this.root);
  
    return tragosDisponibles;
  };
  
  

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
   BinarySearchTree,
};
