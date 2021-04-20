// ejemplo de hoisting var
var miNombre = undefined;

console.log(miNombre + " Soy ese hoisting");
miNombre = "Jimmy";
// ejecuta en consola para ver el resultado

// ejemplo de hoisting function
hey();

function hey( ){
    console.log("hola " + miNombre);
}
var miNombre = "Jimmy";