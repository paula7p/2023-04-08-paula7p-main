const { ordenarPedidos } = require('../checkpoint/06');

describe('Test de ejercicio 06 - 🍹 ordenarPedidos() 🍹', () => {
   test('Debemos ordenarlos de MENOR a MAYOR a cada uno de los clientes', () => {
      const sortSpy = jest.spyOn(Array.prototype, 'sort');
      const productos = [
         { nombre: 'Franco', pedido: { nombre: 'Fernet', precio: 260 } },
         { nombre: 'juan', pedido: { nombre: 'Gancia', precio: 220 } },
         { nombre: 'Nico', pedido: { nombre: 'Vodka', precio: 285 } },
         { nombre: 'Fer', pedido: { nombre: 'Martini', precio: 430 } },
      ];
      expect(ordenarPedidos(productos)).toEqual([
         { nombre: 'juan', pedido: { nombre: 'Gancia', precio: 220 } },
         { nombre: 'Franco', pedido: { nombre: 'Fernet', precio: 260 } },
         { nombre: 'Nico', pedido: { nombre: 'Vodka', precio: 285 } },
         { nombre: 'Fer', pedido: { nombre: 'Martini', precio: 430 } },
      ]);
      expect(sortSpy).not.toHaveBeenCalled();
      const productos2 = [
         { nombre: 'Juan', pedido: { nombre: 'Negroni', precio: 250 } },
         { nombre: 'Marcos', pedido: { nombre: 'Aperol Spritz', precio: 320 } },
         { nombre: 'Raul', pedido: { nombre: 'Cerveza', precio: 220 } },
         { nombre: 'Matias', pedido: { nombre: 'Vino Tinto', precio: 800 } },
      ];
      expect(ordenarPedidos(productos2)).toEqual([
         { nombre: 'Raul', pedido: { nombre: 'Cerveza', precio: 220 } },
         { nombre: 'Juan', pedido: { nombre: 'Negroni', precio: 250 } },
         { nombre: 'Marcos', pedido: { nombre: 'Aperol Spritz', precio: 320 } },
         { nombre: 'Matias', pedido: { nombre: 'Vino Tinto', precio: 800 } },
      ]);

      expect(sortSpy).not.toHaveBeenCalled();
   });
});
