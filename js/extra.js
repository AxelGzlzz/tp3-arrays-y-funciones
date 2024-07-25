/*
Desarrollar un sistema de cajero automático en JavaScript que permita al usuario realizar varias operaciones bancarias mediante un menú interactivo. El usuario podrá consultar el saldo, realizar ingresos y egresos de dinero, y otras operaciones adicionales. Al principio del programa declara una variable `saldo` inicial con un valor de $1000 (puedes elegir otro valor si prefieres). las opciones que se mostrarán al usuario son: 1. Ver saldo de la cuenta. 2. Ingresar dinero. 3. Retirar dinero. 4. Ver últimas  transacciones. 5. Salir. Importante, el usuario puede realizar varias veces las operaciones del cajero.

*/

let saldo = 1000; let movimientos = [];

function verSaldo() {
  alert(`Su saldo actual es: $${saldo}`);
}

function ingresarDinero(cantidad) {
  saldo += cantidad;
  movimientos.push(`Ingreso: $${cantidad}`);
  alert(`Has ingresado $${cantidad}. Su nuevo saldo es: $${saldo}`);
}

function retirarDinero(cantidad) {
  if (cantidad > saldo) {
    alert("Fondos insuficientes.");
  } else {
    saldo = saldo - cantidad;
    movimientos.push(`Retiro: $${cantidad}`);
    alert(`Has retirado $${cantidad}. Su nuevo saldo es: $${saldo}`);
  }
}

function Transacciones() {
  if (movimientos.length === 0) {
    alert("No hay transacciones recientes.");
  } else {
    alert("Transacciones recientes:");
    movimientos.forEach((transaccion, index) => {
      alert(`${index + 1}. ${transaccion}`);
    });
  }
}

let opcion;
do {
  alert(
    " 1.Ver saldo de la cuenta;  2. Ingresar dinero;  3. Retirar dinero;  4.Ver últimas transacciones;  5. Salir"
  );
  opcion = parseInt(prompt("Ingrese una opción:"));
  switch (opcion) {
    case 1:
      verSaldo();
      break;
    case 2:
      let cantidadIngresar = parseFloat(
        prompt("Ingrese la cantidad a ingresar: ")
      );
      ingresarDinero(cantidadIngresar);
      break;
    case 3:
      let cantidadRetirar = parseFloat(
        prompt("Ingrese la cantidad a retirar: ")
      );
      retirarDinero(cantidadRetirar);
      break;
    case 4:
      Transacciones();
      break;
    case 5:
      alert("NOS VEMOSS :( :( :( :( :( :(.");
      break;
    default:
      console.log("Opción inválida. Por favor, intente de nuevo.");
  }
} while (opcion !== 5);
