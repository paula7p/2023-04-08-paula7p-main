const Stack = require("../DS").Stack;
const prepararMenú = require('../checkpoint/02');

describe('Ejercicio 02 - 🍹 prepararMenú() 🍹', () => {

  test('prepararMenú con tiempo límite válido', () => {
    const tragos = ["Ron", "Vodka", "Whisky", "Tequila"];
    const tiempos = [5, 3, 8, 10];
    const tiempoLimite = 7;
    const menu = prepararMenú(tragos, tiempos, tiempoLimite);
    expect(menu).toEqual({ "tragos": { array: ['Vodka', 'Ron'] }, "tiempos": { array: [3, 5] } });
    expect(prepararMenú(tragos, tiempos, tiempoLimite).tragos).toBeInstanceOf(Stack);
    expect(prepararMenú(tragos, tiempos, tiempoLimite).tiempos).toBeInstanceOf(Stack);

    const tragos2 = ["Dry Martini", "Piña colada", "Daiquiri", "Mojito"];
    const tiempos2 = [7, 12, 8, 17];
    const tiempoLimite2 = 10;
    const menu2 = prepararMenú(tragos2, tiempos2, tiempoLimite2);
    expect(menu2).toEqual({ "tragos": { array: ['Daiquiri', 'Dry Martini'] }, "tiempos": { array: [8, 7] } });
    expect(prepararMenú(tragos2, tiempos2, tiempoLimite2).tragos).toBeInstanceOf(Stack);
    expect(prepararMenú(tragos2, tiempos2, tiempoLimite2).tiempos).toBeInstanceOf(Stack);
  });

  test('prepararMenú con tiempo límite inválido', () => {
    const tragos = ["Tequila", "Whisky", "Vodka", "Ron"];
    const tiempos = [10, 7, 12, 15];
    const tiempoLimite = 2;
    const menu = prepararMenú(tragos, tiempos, tiempoLimite);
    expect(menu).toEqual({ "tragos": { array: [] }, "tiempos": { array: [] } });
    expect(prepararMenú(tragos, tiempos, tiempoLimite).tragos).toBeInstanceOf(Stack);
    expect(prepararMenú(tragos, tiempos, tiempoLimite).tiempos).toBeInstanceOf(Stack);
  });
});
