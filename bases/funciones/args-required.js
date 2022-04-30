"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Nombre is required');
        }
        return `${firstName} ${lastName}`;
    };
    let noName;
    // const name = fullName(noName, 'Stark');  //error de validacion anterior
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
