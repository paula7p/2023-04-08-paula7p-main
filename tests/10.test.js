const { BinarySearchTree } = require('../checkpoint/10');

describe('Ejercicio 10 - 🔡 enOrden() 🔡', () => {
   it('Debería devolver los tragos ordenados alfabéticamente', () => {
      const arbol = new BinarySearchTree({ nombre: 'Gancia', precio: 400 });
      arbol.insert({ nombre: 'Fernet', precio: 500 });
      arbol.insert({ nombre: 'Agua', precio: 200 });
      arbol.insert({ nombre: 'Malibu', precio: 400 });
      arbol.insert({ nombre: 'Long Island', precio: 400 });
      arbol.insert({ nombre: 'Martini', precio: 800 });
      arbol.insert({ nombre: 'Tom Collins', precio: 1000 });
      arbol.insert({ nombre: 'Bailey', precio: 900 });
      arbol.insert({ nombre: 'Caipi', precio: 700 });
      expect(arbol.enOrden()).toEqual([
         { nombre: 'Agua', precio: 200 },
         { nombre: 'Bailey', precio: 900 },
         { nombre: 'Caipi', precio: 700 },
         { nombre: 'Fernet', precio: 500 },
         { nombre: 'Gancia', precio: 400 },
         { nombre: 'Long Island', precio: 400 },
         { nombre: 'Malibu', precio: 400 },
         { nombre: 'Martini', precio: 800 },
         { nombre: 'Tom Collins', precio: 1000 },
      ]);
   });
});
