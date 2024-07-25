/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58

*/

function resultado (lado1,lado2){
  const  result=2*(lado1+lado2);
  return result;
}

const lado1 =parseInt(prompt("ingrese lado1"));
const lado2 =parseInt(prompt("ingrese lado2"));

const result =resultado(lado1,lado2);

document.write(`<p>El resultado del perimetro es ${result}</p>`);
alert("el resultado del perimetro es: "+result);