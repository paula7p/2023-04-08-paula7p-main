const { BinarySearchTree } = require('../checkpoint/09');

describe('Ejercicio 09 - 🍹 consultarTragos() 🍹', () => {
   test('Recorrer el árbol y devolver en un arreglo con los tragos disponibles', () => {
      const arbol = new BinarySearchTree({ nombre: 'Gancia', precio: 400 });
      arbol.insert({ nombre: 'Fernet', precio: 500 });
      arbol.insert({ nombre: 'Agua', precio: 200 });
      arbol.insert({ nombre: 'Malibu', precio: 400 });
      arbol.insert({ nombre: 'Long Island', precio: 400 });
      arbol.insert({ nombre: 'Martini', precio: 800 });
      arbol.insert({ nombre: 'Tom Collins', precio: 1000 });
      arbol.insert({ nombre: 'Bailey', precio: 900 });
      arbol.insert({ nombre: 'Caipi', precio: 700 });

      expect(arbol.consultarTragos(400)).toEqual([
         'Gancia',
         'Agua',
         'Malibu',
         'Long Island',
      ]);

      expect(arbol.consultarTragos(200)).toEqual(['Agua']);
   });
});
