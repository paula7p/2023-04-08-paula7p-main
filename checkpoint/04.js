/* 4️⃣ ***** EJERCICIO 4 RECURSIÓN***** - encontrarTragoPopular() 4️⃣

Implementar una función llamada 🍹 encontrarTragoPopular 🍹 que reciba como parámetro un objeto de tragos.
a función debe utilizar recursión para recorrer el objeto y encontrar el trago con la mayor cantidad vendida. La función debe devolver el el trago más popular y además crearle la propiedad tragoMasVendido con el valor en true.


📝 EJEMPLO 📝 
(INPUT) ➡ 
tragos = {"trago1": {"nombre": "Margarita", "cantidadVendida": 20},
          "trago2": {"nombre": "Daiquiri", "cantidadVendida": 15},
          "trago3": {"nombre": "Mojito", "cantidadVendida": 25}
        };

encontrarTragoPopular(tragos,) ➡ (OUTPUT)
  {
    "nombre": "Mojito",
    "cantidadVendida": 25,
    "tragoMasVendido": true
  }

REQUISITOS
  🟢 SI O SI aplicar recursión.
  🟢 Retornar sólo el objeto que es el trago más popular.
  🟢 El objeto debe tener una nueva propiedad llamada "cantidadVendida" en true.

⛔️ Tip: puedes agregar un default parameter a la función.
*/

function encontrarTragoPopular(tragos) {
   // Tu código aquí:
    let popular = null;
    for (let key in tragos) {
      if (!popular || tragos[key].cantidadVendida > popular.cantidadVendida) {
        popular = tragos[key];
      }
    }
    if (popular) {
      popular.tragoMasVendido = true;
    }
    return popular;
  }

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = encontrarTragoPopular;
