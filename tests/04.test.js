const encontrarTragoPopular = require('../checkpoint/04');

describe('Ejercicio 04 - 🍹 encontrarTragoPopular() 🍹', () => {
   test("Recursivamente encontrar el trago más vendido y añadirle la propiedad 'tragoMasVendido'", () => {
      const tragos = {
         trago1: {
            nombre: 'Margarita',
            cantidadVendida: 20,
         },
         trago2: {
            nombre: 'Daiquiri',
            cantidadVendida: 15,
         },
         trago3: {
            nombre: 'Mojito',
            cantidadVendida: 25,
         },
      };

      const resultado = encontrarTragoPopular(tragos);
      expect(resultado.nombre).toBe('Mojito');
      expect(resultado.tragoMasVendido).toBe(true);

      const tragos2 = {
         trago1: {
            nombre: 'Daiquiri',
            cantidadVendida: 30,
         },
         trago2: {
            nombre: 'Aperol Spritz',
            cantidadVendida: 28,
         },
         trago3: {
            nombre: 'Manhattan',
            cantidadVendida: 12,
         },
      };

      const resultado2 = encontrarTragoPopular(tragos2);
      expect(resultado2.nombre).toBe('Daiquiri');
      expect(resultado2.tragoMasVendido).toBe(true);
   });
});
