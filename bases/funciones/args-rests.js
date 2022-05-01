"use strict";
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const superman = fullName('Juan', 'Pablo', 'Perez');
    console.log({ superman });
})();
