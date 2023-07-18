// crear una matriz vacia de 4x4

function  crearMatrizVacia (){
    let matriz =[];
    for(let i = 0; i < 4; i++){
        var fila = new array (4);
        matriz.push(fila);
    }
    return matriz;
}

for (let i = 0; i < 4; i++){
    for (let j = 0; j < 4; i++) {
        let valor = parseInt(prompt("Ingrese el valor para la posición [" + i + "][" + j + "]: "));
        matriz[i][j] = valor;
      }
      suma += matriz[i][columna];
    }
    return suma;

function sumarColumna(matriz, columna) {
    
}



/*

// Función para sumar una columna específica
function sumarColumna(matriz, columna) {
  var suma = 0;
  for (var i = 0; i < 4; i++) {
    suma += matriz[i][columna];
  }
  return suma;
}

// Función para sumar la diagonal principal
function sumarDiagonalPrincipal(matriz) {
  var suma = 0;
  for (var i = 0; i < 4; i++) {
    suma += matriz[i][i];
  }
  return suma;
}

// Función para sumar la diagonal inversa
function sumarDiagonalInversa(matriz) {
  var suma = 0;
  for (var i = 0; i < 4; i++) {
    suma += matriz[i][3 - i];
  }
  return suma;
}

// Función para calcular la media de todos los valores de la matriz
function calcularMedia(matriz) {
  var total = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      total += matriz[i][j];
    }
  }
  var media = total / 16;
  return media;
}

// Función para mostrar el menú y realizar la selección del usuario
function mostrarMenu() {
  var matriz = crearMatrizVacia();

  while (true) {
    console.log("\n--- Menú ---");
    console.log("1. Rellenar la matriz");
    console.log("2. Sumar una fila");
    console.log("3. Sumar una columna");
    console.log("4. Sumar la diagonal principal");
    console.log("5. Sumar la diagonal inversa");
    console.log("6. Calcular la media");
    console.log("7. Salir");

    var opcion = parseInt(prompt("Seleccione una opción: "));

    switch (opcion) {
      case 1:
        rellenarMatriz(matriz);
        break;
      case 2:
        var filaSeleccionada = parseInt(prompt("Ingrese el número de fila a sumar (0-3): "));
        if (filaSeleccionada >= 0 && filaSeleccionada <= 3) {
          var sumaFila = sumarFila(matriz, filaSeleccionada);
          console.log("La suma de la fila " + filaSeleccionada + " es: " + sumaFila);
        } else {
          console.log("Fila inválida. Intente nuevamente.");
        }
        break;
      case 3:
        var columnaSeleccionada = parseInt(prompt("Ingrese el número de columna a sumar (0-3): "));
        if (columnaSeleccionada >= 0 && columnaSeleccionada <= 3) {
          var sumaColumna = sumarColumna(matriz, columnaSeleccionada);
          console.log("La suma de la columna " + columnaSeleccionada + " es: " + sumaColumna);
        } else {
          console.log("Columna inválida. Intente nuevamente.");
        }
        break;
      case 4:
        var sumaDiagonalPrincipal = sumarDiagonalPrincipal(matriz);
        console.log("La suma de la diagonal principal es: " + sumaDiagonalPrincipal);
        break;
      case 5:
        var sumaDiagonalInversa = sumarDiagonalInversa(matriz);
        console.log("La suma de la diagonal inversa es: " + sumaDiagonalInversa);
        break;
      case 6:
        var media = calcularMedia(matriz);
        console.log("La media de los valores de la matriz es: " + media);
        break;
      case 7:
        return;
      default:
        console.log("Opción inválida. Intente nuevamente.");
        break;
    }
  }
}

/* Llamar a la función para mostrar el menú
mostrarMe
