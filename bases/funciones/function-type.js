"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const saludar = (name) => `Hola ${name}`;
    const save = () => `El mundo esta a salvo`;
    console.log('RESULTADO 01: ----------------------------');
    let a;
    a = '10';
    console.log(a);
    let b;
    b = addNumber;
    console.log('RESULTADO 02: ----------------------------');
    console.log(b(2, 3));
    console.log('RESULTADO 03: ----------------------------');
    let c;
    c = saludar;
    console.log(c(' Juan '));
    console.log('RESULTADO 04: ----------------------------');
    let d;
    d = save;
    console.log(d());
})();
//# sourceMappingURL=function-type.js.map