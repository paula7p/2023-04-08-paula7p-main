const ejercicio = require('../checkpoint/05');

describe('Ejercicio 05 - 💲 encontrarMasCaros() 💲', () => {
   test("Debería retornar un arreglo con los objetos cuya propiedad 'precio' supere al recibido por parámetro", () => {
      const tragos = [
         { nombre: 'Whisky', precio: 312 },
         { nombre: 'Ron', precio: 156 },
         { nombre: 'Gin', precio: 215 },
         { nombre: 'Vino tinto', precio: 100 },
      ];
      expect(ejercicio.encontrarMasCaros(tragos, 200)).toEqual([
         { nombre: 'Whisky', precio: 312 },
         { nombre: 'Gin', precio: 215 },
      ]);

      const tragos2 = [
         { nombre: 'Whisky', precio: 400 },
         { nombre: 'Ron', precio: 500 },
         { nombre: 'Gin', precio: 700 },
         { nombre: 'Vino tinto', precio: 800 },
      ];

      expect(ejercicio.encontrarMasCaros(tragos2, 300)).toEqual([
         { nombre: 'Whisky', precio: 400 },
         { nombre: 'Ron', precio: 500 },
         { nombre: 'Gin', precio: 700 },
         { nombre: 'Vino tinto', precio: 800 },
      ]);

      const tragos3 = [
         { nombre: 'Whisky', precio: 233 },
         { nombre: 'Ron', precio: 512 },
         { nombre: 'Gin', precio: 135 },
         { nombre: 'Vino tinto', precio: 1043 },
      ];

      expect(ejercicio.encontrarMasCaros(tragos3, 700)).toEqual([
         { nombre: 'Vino tinto', precio: 1043 },
      ]);
   });
   test('Debería retornar el mensaje "No hay tragos disponibles" si ningún precio supera al recibido por parámetro', () => {
      const tragos = [
         { nombre: 'Whisky', precio: 312 },
         { nombre: 'Ron', precio: 156 },
         { nombre: 'Gin', precio: 215 },
         { nombre: 'Vino tinto', precio: 100 },
      ];
      expect(ejercicio.encontrarMasCaros(tragos, 6000)).toEqual(
         'No hay tragos disponibles'
      );

      const tragos2 = [
         { nombre: 'Whisky', precio: 400 },
         { nombre: 'Ron', precio: 500 },
         { nombre: 'Gin', precio: 700 },
         { nombre: 'Vino tinto', precio: 800 },
      ];
      expect(ejercicio.encontrarMasCaros(tragos2, 10000)).toEqual(
         'No hay tragos disponibles'
      );
   });
});
