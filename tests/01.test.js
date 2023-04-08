const { Queue } = require("../DS");
const guardarTragos = require('../checkpoint/01');

describe("Ejercicio 01 - 🍸 guardarTragos() 🍸", () => {
  test("Debe retornar un objeto con tragos y su cantidad", () => {
    const tragosQueue = new Queue();
    tragosQueue.enqueue("margarita");
    tragosQueue.enqueue("daiquiri");
    tragosQueue.enqueue("mojito");
    tragosQueue.enqueue("piña colada");
    tragosQueue.enqueue("negroni");
    const result = guardarTragos(tragosQueue);

    expect(result).toEqual({
      margarita: { trago: "margarita", cantidad: 1 },
      daiquiri: { trago: "daiquiri", cantidad: 1 },
      mojito: { trago: "mojito", cantidad: 1 },
      "piña colada": { trago: "piña colada", cantidad: 1 },
      "negroni": { trago: "negroni", cantidad: 1 },
    });
  });
  test("Debe retornar un objeto con tragos y su cantidad incluyendo los repetidos", () => {
    const tragosQueue = new Queue();
    tragosQueue.enqueue("margarita");
    tragosQueue.enqueue("daiquiri");
    tragosQueue.enqueue("daiquiri");
    tragosQueue.enqueue("mojito");
    tragosQueue.enqueue("mojito");
    tragosQueue.enqueue("mojito");
    tragosQueue.enqueue("piña colada");
    tragosQueue.enqueue("negroni");
    const result = guardarTragos(tragosQueue);
    expect(result).toEqual({
      margarita: { trago: "margarita", cantidad: 1 },
      daiquiri: { trago: "daiquiri", cantidad: 2 },
      mojito: { trago: "mojito", cantidad: 3 },
      "piña colada": { trago: "piña colada", cantidad: 1 },
      "negroni": { trago: "negroni", cantidad: 1 },
    });
  });
});
