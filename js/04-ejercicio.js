/*
4- Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

function parimpar(numero) {
  if (numero % 2 === 0) {
    document.write("es par");
    console.log("es par");
    alert("par");
  } else if (numero % 2 != 0) {
    document.write("es impar");
    console.log("es impar");
    alert("impar");
  } 
}

const numero = parseInt(prompt("ingrese un numero"));
parimpar(numero);
