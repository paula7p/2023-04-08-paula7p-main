const { BinarySearchTree } = require('../DS');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

🔟 ***** EJERCICIO 10 BINARYSEARCHTREE***** - BinarySearchTree.enOrden() 🔟
Tenemos una carta con todos los tragos y los precios pero un cliente solicito si los tragos podrian estar ordenados alfabeticamente.
Tu mision va a ser agregar al prototype de BinarySearchTree, el método 🔡 enOrden() 🔡
Tendrás que recorrer el árbol (que contiene objetos al igual que el ejerecicio previo) y devolver los nombres de los tragos
ordenados de forma alfabetica como se muestra en el ejemplo de mas abajo.

📝 EJEMPLO 📝
Dado el siguiente árbol:
                         { nombre: "Gancia", precio: 400 }
                         /                             \
          {nombre: "Fernet", precio: 500}              {nombre: "Malibu", precio: 400}
                      /                               /                            \
          {nombre: "Agua", precio: 200}    {nombre: "Long Island", precio: 400}     {nombre: Martini, precio: 800}
                         \                                                           \
               {nombre: "Bailey", precio: 900}                                     {nombre: "Tom Collins", precio: 1000}
                          \
               {nombre: "Caipi", precio: 700}


 ❗ BinarySearchTree.enOrden() ❗: ["Agua","Bailey","Caipi","Fernet","Gancia","Long Island","Malibu","Martini","Tom Collins"]

REQUISITOS
 🟢 Debe devolver los tragos ordenados alfabéticamente.

⛔️ TIP: Podés usar default parameters para ayudarte.
*/

BinarySearchTree.prototype.enOrden = function () {
   //  Tu código aquí:
      let arr = [];
      if (this.left) {
        arr = this.left.enOrden();
      }
      arr.push(this.value);
      if (this.right) {
        arr = arr.concat(this.right.enOrden());
      }
      return arr.sort();
    }
    
    
    
    

//  ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
   BinarySearchTree,
};
