//Nos piden crear una matriz de 4×4 de números enteros que inicialmente esta vacía, nos piden hacer un menú con estas opciones:
// Rellenar TODA la matriz de números, debes pedírselo al usuario.


let matriz = [];

function crearMatrizVacia() {
  matriz = Array.from({ length: 4 }, () => Array(4).fill(0));
}

function rellenarMatriz() {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      matriz[i][j] = parseInt(prompt(`Ingrese el valor para la posición [${i + 1}][${j + 1}]:`));
    }
  }
}

function sumarFila() {
  if (matriz.length === 0) {
    console.log("Primero debes rellenar la matriz.");
    return;
  }

  const fila = parseInt(prompt("Ingrese el número de la fila a sumar:"));

  if (fila < 1 || fila > matriz.length) {
    console.log("Fila inválida. Intente nuevamente.");
    return;
  }

  const suma = matriz[fila - 1].reduce((a, b) => a + b, 0);
  console.log(`La suma de la fila ${fila} es: ${suma}`);
}

function sumarColumna() {
  if (matriz.length === 0) {
    console.log("Primero debes rellenar la matriz.");
    return;
  }

  const columna = parseInt(prompt("Ingrese el número de la columna a sumar:"));

  if (columna < 1 || columna > matriz[0].length) {
    console.log("Columna inválida. Intente nuevamente.");
    return;
  }

  const suma = matriz.reduce((a, b) => a + b[columna - 1], 0);
  console.log(`La suma de la columna ${columna} es: ${suma}`);
}

function sumarDiagonalPrincipal() {
  if (matriz.length === 0) {
    console.log("Primero debes rellenar la matriz.");
    return;
  }

  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][i];
  }
  console.log(`La suma de la diagonal principal es: ${suma}`);
}

function sumarDiagonalInversa() {
  if (matriz.length === 0) {
    console.log("Primero debes rellenar la matriz.");
    return;
  }

  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][matriz.length - 1 - i];
  }
  console.log(`La suma de la diagonal inversa es: ${suma}`);
}

function calcularMedia() {
  if (matriz.length === 0) {
    console.log("Primero debes rellenar la matriz.");
    return;
  }

  let suma = 0;
  let cantidadElementos = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
      cantidadElementos++;
    }
  }
  const media = suma / cantidadElementos;
  console.log(`La media de la matriz es: ${media}`);
}

function mostrarMenu() {
  let opcion;
  do {
    opcion = parseInt(prompt(`MENU
      1. Rellenar la matriz
      2. Suma de una fila
      3. Suma de una columna
      4. Sumar la diagonal principal
      5. Sumar la diagonal inversa
      6. Calcular la media de la matriz
      0. Salir
      Ingrese una opción:`));

    switch (opcion) {
      case 1:
        crearMatrizVacia();
        rellenarMatriz();
        console.log("Matriz rellenada:");
        console.log(matriz);
        break;
      case 2:
        sumarFila();
        break;
      case 3:
        sumarColumna();
        break;
      case 4:
        sumarDiagonalPrincipal();
        break;
      case 5:
        sumarDiagonalInversa();
        break;
      case 6:
        calcularMedia();
        break;
      case 0:
        console.log("¡Hasta luego!");
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
        break;
    }
  } while (opcion !== 0);
}

mostrarMenu();
