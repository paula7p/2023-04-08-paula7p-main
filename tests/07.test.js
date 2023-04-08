const LinkedList = require("../checkpoint/07");

describe("Ejercicio 07 - 🍹 encontrarPedidoRepetido() 🍹", () => {
  it("Debe retornar los pedidos repetidos", () => {
    const lista1 = new LinkedList();
    const lista2 = new LinkedList();
    lista1.add({ nombre: "Franco", trago: "Fernet" });
    lista1.add({ nombre: "Martin", trago: "Gancia" });
    lista1.add({ nombre: "Franco", trago: "Fernet" });
    lista1.add({ nombre: "Mateo", trago: "Cerveza Corona" });
    lista1.add({ nombre: "Nico", trago: "Negroni" });
    lista1.add({ nombre: "Ale", trago: "Cerveza IPA" });
    const buscandoClientesRepetidos = lista1.encontrarPedidoRepetido("Franco");
    expect(buscandoClientesRepetidos).toBeInstanceOf(LinkedList);
    expect(buscandoClientesRepetidos.head.value).toEqual({
      nombre: "Franco",
      trago: "Fernet",
    });
    expect(buscandoClientesRepetidos.head.next.value).toEqual({
      nombre: "Franco",
      trago: "Fernet",
    });
    lista2.add({ nombre: "Franco", trago: "Fernet" });
    lista2.add({ nombre: "Martin", trago: "Gancia" });
    lista2.add({ nombre: "Martin", trago: "Gancia" });
    lista2.add({ nombre: "Juan", trago: "Fernet" });
    lista2.add({ nombre: "Mateo", trago: "Cerveza Corona" });
    lista1.add({ nombre: "Ale", trago: "Cerveza IPA" });
    const buscandoClientesRepetidos2 = lista2.encontrarPedidoRepetido("Martin");
    expect(buscandoClientesRepetidos2).toBeInstanceOf(LinkedList);
    expect(buscandoClientesRepetidos2.head.value).toEqual({
      nombre: "Martin",
      trago: "Gancia",
    });
    expect(buscandoClientesRepetidos2.head.next.value).toEqual({
      nombre: "Martin",
      trago: "Gancia",
    });
  });
  it("Debe retornar false si no hay clientes repetidos", () => {
    const lista1 = new LinkedList();
    const lista2 = new LinkedList();
    lista1.add(1);
    const buscandoClientesRepetidos = lista1.encontrarPedidoRepetido(2);
    expect(buscandoClientesRepetidos).toEqual(false);
    lista2.add({ nombre: "Franco", trago: "Fernet" });
    lista2.add({ nombre: "Martin", trago: "Fernet" });
    lista2.add({ nombre: "Nico", trago: "Fernet" });
    lista2.add({ nombre: "Mate", trago: "Fernet" });
    const buscandoClientesRepetidos2 = lista2.encontrarPedidoRepetido("Juan");
    expect(buscandoClientesRepetidos2).toEqual(false);
    const buscandoClientesRepetidos3 =
      lista2.encontrarPedidoRepetido("Francisco");
    expect(buscandoClientesRepetidos3).toEqual(false);
  });
});
