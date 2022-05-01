"use strict";
function sumar(a, b) {
    return a + b;
}
;
console.log(`El resultado de la 1er funcion es: ${sumar(5, 9)}`);
const sumar2 = (a, b) => {
    return a + b;
};
console.log(`El resultado de la 2da funcion es: ${sumar2(4, 8)}`);
let contar = (heroes) => {
    return heroes.length;
};
let superHeros = ['Flash', 'Batman', 'Superman'];
let result = contar(superHeros);
console.log(result);
const llamarArgs = (llamar) => {
    if (llamar) {
        console.log('Argumento recibido');
    }
    else {
        console.log('Argumento no recibido');
    }
};
llamarArgs();
const joinHeros = (...personas) => {
    return personas.join(', ');
};
const uniendo = joinHeros('Padre', 'Hijo', 'Nieto');
console.log({ uniendo });
const noHaceNada = (nro, texto, arrays, booleano) => { };
const tester = (a, b, c, d) => {
    console.log(`${a}`);
    console.log(`${b}`);
    console.log(`${c}`);
    console.log(`${d}`);
};
let a = tester(6, 'Aldo', ['Uno', 'Dos'], false);
