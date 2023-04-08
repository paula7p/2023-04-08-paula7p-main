const { consultarPreparacion } = require('../checkpoint/03');

describe('Ejercicio 03 - 🔍 consultarPreparacion 🔍', () => {
   test("Debe retornar: 'Por favor verifique bien los nombres de los tragos que quiere solicitar su preparación'", () => {
      const tragos = ['Feernet', 'Destornillador'];
      const carta = [
         {
            name: 'Fernet',
            preparacion: 'Fernet y Coca',
         },
         { name: 'Gancia', preparacion: 'Gancia y Sprite' },
         { name: 'Destornillador', preparacion: 'Jugo de naranja y Vodka' },
      ];
      const chequear = consultarPreparacion(tragos);
      expect(chequear(carta)).toBe(
         'Por favor verifique bien los nombres de los tragos que quiere solicitar su preparación'
      );

      const tragos2 = ['Limonada'];
      const carta2 = [
         {
            name: 'Fernet',
            preparacion: 'Fernet y Coca',
         },
         { name: 'Gancia', preparacion: 'Gancia y Sprite' },
         { name: 'Destornillador', preparacion: 'Jugo de naranja y Vodka' },
      ];
      const chequear2 = consultarPreparacion(tragos2);
      expect(chequear2(carta2)).toBe(
         'Por favor verifique bien los nombres de los tragos que quiere solicitar su preparación'
      );
   });

   test('No debería de arrojar el error si nos pasan los tragos en minúscula o mayúscula', () => {
      const tragos = ['ferNeT', 'desTorNilLador'];
      const carta = [
         {
            name: 'Fernet',
            preparacion: 'Fernet y Coca',
         },
         { name: 'Gancia', preparacion: 'Gancia y Sprite' },
         { name: 'Destornillador', preparacion: 'Jugo de naranja y Vodka' },
      ];
      const chequear = consultarPreparacion(tragos);
      expect(chequear(carta)).toEqual([
         ['El trago: Fernet, se prepara de la siguiente forma: Fernet y Coca'],
         [
            'El trago: Destornillador, se prepara de la siguiente forma: Jugo de naranja y Vodka',
         ],
      ]);
   });

   test('Debe retornar, por cada trago solicitado, un arreglo de arreglos con sus respectivos mensajes', function () {
      const tragos = ['Fernet', 'Destornillador'];
      const carta = [
         {
            name: 'Fernet',
            preparacion: 'Fernet y Coca',
         },
         { name: 'Gancia', preparacion: 'Gancia y Sprite' },
         { name: 'Destornillador', preparacion: 'Jugo de naranja y Vodka' },
      ];
      const chequear = consultarPreparacion(tragos);
      console.log('CHEQUEAR', chequear(carta));
      expect(chequear(carta)).toEqual([
         ['El trago: Fernet, se prepara de la siguiente forma: Fernet y Coca'],
         [
            'El trago: Destornillador, se prepara de la siguiente forma: Jugo de naranja y Vodka',
         ],
      ]);

      const tragos2 = ['Fernet', 'Destornillador', 'Gancia'];
      const carta2 = [
         {
            name: 'Fernet',
            preparacion: 'Fernet y Coca',
         },
         { name: 'Gancia', preparacion: 'Gancia y Sprite' },
         { name: 'Destornillador', preparacion: 'Jugo de naranja y Vodka' },
      ];
      const chequear2 = consultarPreparacion(tragos2);
      expect(chequear2(carta2)).toEqual([
         ['El trago: Fernet, se prepara de la siguiente forma: Fernet y Coca'],
         [
            'El trago: Destornillador, se prepara de la siguiente forma: Jugo de naranja y Vodka',
         ],
         [
            'El trago: Gancia, se prepara de la siguiente forma: Gancia y Sprite',
         ],
      ]);
   });
});
