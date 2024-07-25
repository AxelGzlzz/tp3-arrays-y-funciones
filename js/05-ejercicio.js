/*
5- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.
*/

function maymin(cadena) {
    if (cadena === cadena.toUpperCase()) {
        console.log("La cadena está formada solo por mayúsculas.");
        alert("La cadena está formada solo por mayúsculas.");

    } else if (cadena === cadena.toLowerCase()) {
        console.log("La cadena está formada solo por minúsculas.");
        alert("La cadena está formada solo por minúsculas.");

    } else {
        console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
        alert("La cadena está formada por una mezcla de mayúsculas y minúsculas.");

    }
}

   const cadena =prompt("ingrese cadena");

   maymin(cadena);

