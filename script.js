function generarEdades(numPersonas) {
  var edades = [];

  while (numPersonas > 0) {
    var edad = Math.floor(Math.random() * 100) + 1; // Generar una edad aleatoria entre 1 y 100

    if (edad >= 18) {
      edades.push(edad);
      numPersonas--;
    }
  }

  return edades;
}

function calcularEdadPromedio(edades) {
  if (edades.length === 0) {
    return 0; // Si no hay edades en la lista, se devuelve 0 para evitar una división por cero.
  }

  var sumaEdades = 0;

  for (var i = 0; i < edades.length; i++) {
    sumaEdades += edades[i];
  }

  var promedio = sumaEdades / edades.length;

  return promedio;
}

function mostrarResultado() {
  var numPersonas = parseInt(prompt("Ingrese el número de personas:"));

  if (numPersonas < 5) {
    alert("El cálculo no se puede realizar. El número mínimo de personas es 5.");
    return;
  }

  var edadesAleatorias = generarEdades(numPersonas);
  var edadPromedio = calcularEdadPromedio(edadesAleatorias);

  var resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "<p>Edades generadas: " + edadesAleatorias.join(", ") + "</p><p>Edad promedio: " + edadPromedio.toFixed(2) + "</p>";
}