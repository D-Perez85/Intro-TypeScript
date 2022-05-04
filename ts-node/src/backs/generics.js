//----------------------------------------------------OPCION 1 -----------------------------------------------------------------------------------------
define(["require", "exports", "../generics/generic"], function (require, exports, generic_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, generic_1.printObject)(213);
    (0, generic_1.printObject)('abc');
    (0, generic_1.printObject)(['a', 'b', 'c']);
    (0, generic_1.printObject)({ a: 1, b: 2, c: 3 });
    console.log((0, generic_1.genericFn)(23.1234).toFixed(2));
    console.log((0, generic_1.genericFn)(new Date()).getDate());
    console.log((0, generic_1.genericArrowFn)('Hola Mundo').toUpperCase());
    const superman = {
        name: 'Juancito',
        realName: 'Juanchon',
        dangerLevel: 120
    };
    console.log((0, generic_1.genericFn)(superman).name);
    console.log((0, generic_1.genericFn)(superman).dangerLevel);
});
