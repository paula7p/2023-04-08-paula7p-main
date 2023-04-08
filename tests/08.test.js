const { LinkedList } = require('../checkpoint/08');

describe('Ejercicio 08 - 🍹 entregarPedido() 🍹', () => {
   test('Retornar los tragos y los recibos correspondientes', () => {
      const lista = new LinkedList();
      const lista2 = new LinkedList();
      lista.add({ nombre: 'Franco', trago: 'Fernet', precio: 200 });
      lista.add({ nombre: 'Marcos', trago: 'Gancia', precio: 150 });
      lista.add({ nombre: 'Juan', trago: 'Negroni', precio: 100 });
      lista.add({ nombre: 'Nico', trago: 'Cerveza', precio: 260 });
      lista.add({ nombre: 'Mateo', trago: 'Vino tinto', precio: 210 });
      const slicedList = lista.entregarPedido(['Franco', 'Marcos']);
      expect(slicedList).toBeInstanceOf(LinkedList);
      expect(slicedList.head.value).toEqual({ pedido: 'Fernet', recibo: 200 });
      expect(slicedList.head.next.value).toEqual({
         pedido: 'Gancia',
         recibo: 150,
      });
      lista2.add({ nombre: 'Franco', trago: 'Fernet', precio: 200 });
      lista2.add({ nombre: 'Marcos', trago: 'Gin Tonic', precio: 100 });
      lista2.add({ nombre: 'Juan', trago: 'Negroni', precio: 120 });
      lista2.add({ nombre: 'Nico', trago: 'Cerveza', precio: 300 });
      lista2.add({ nombre: 'Mateo', trago: 'Vino blanco', precio: 90 });
      const slicedList2 = lista2.entregarPedido(['Juan', 'Mateo']);
      expect(slicedList2).toBeInstanceOf(LinkedList);
      expect(slicedList2.head.value).toEqual({
         pedido: 'Negroni',
         recibo: 120,
      });
      expect(slicedList2.head.next.value).toEqual({
         pedido: 'Vino blanco',
         recibo: 90,
      });
   });
});
