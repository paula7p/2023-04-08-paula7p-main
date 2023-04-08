/* 5️⃣ ***** EJERCICIO 5 RECURSIÓN ***** - encontrarMasCaros() 5️⃣

Implementar la función 💲encontrarMasCaros()💲 la cual recibirá por parámetro un arreglo de objetos
que representarán algunos tragos, y un precio el cual servirá como llave de búsqueda. Tendrás que,
recursivamente, iterar el arreglo y retornar uno nuevo sólo con los objetos que tengan un precio superior 
al que recibes.

📝 EJEMPLO 📝 
(INPUT) ➡ [{ nombre: 'Whisky', precio: 312 }, 
            { nombre: 'Ron', precio: 156 }, 
            { nombre: 'Gin', precio: 215 }, 
            { nombre: 'Vino tinto', precio: 100 }]

encontrarMasCaros(arreglo, 200) ➡ (OUTPUT)
[{ nombre: 'Whisky' precio: 312 }, { nombre: 'Gin', precio: 215 }]

REQUISITOS
  🟢 Retornar un nuevo arreglo con los tragos que tengan un precio SUPERIOR al recibido por parámetro.
  🟢 Implementar recursividad🔄!
  🟢 Si ningún precio supera al recibido por parámetros, retornar un mensaje que diga "No hay tragos disponibles".
*/

function encontrarMasCaros(arreglo, precio) {
   // Tu código aquí:
      let masCaros = [];
    
      // Iteramos el arreglo con un ciclo for...of
      for (let trago of arreglo) {
        // Si el precio del trago es mayor al precio recibido, lo agregamos al arreglo masCaros
        if (trago.precio > precio) {
          masCaros.push(trago);
        }
      }
    
      // Si el arreglo masCaros está vacío, retornamos un mensaje indicando que no hay tragos disponibles
      if (masCaros.length === 0) {
        return "No hay tragos disponibles";
      }
    
      // Si el arreglo masCaros no está vacío, lo retornamos
      return masCaros;
    }
    
    

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
   encontrarMasCaros,
};
