/*
1- Crear un array llamado meses y que almacene el nombre de los doce meses del
año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

function mesesdelaño (){

    document.write(`<ul>`);
    for(let i=0; i<meses.length; i++){
    
        document.write(`<li>${meses[i]}</li>`);
    
    
    }
    document.write(`</ul>`);


}



document.write("<h1>Lista de meses </h1>");
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "sep",
  "octubre",
  "noviembre",
  "diciembre",
];
mesesdelaño ();